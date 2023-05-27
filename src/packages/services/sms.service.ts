import { BadRequestException, Injectable } from '@nestjs/common';
import {
  APIResponse,
  SMS,
  SMS_CATEGORY,
  SMS_KEYWORD,
  SpendSummary,
} from '../types/sms';

@Injectable()
export class SMSClassifierService {
  private rules: { keyword: SMS_KEYWORD; category: SMS_CATEGORY }[];

  constructor() {
    this.rules = [
      { keyword: SMS_KEYWORD.flight, category: SMS_CATEGORY.travel },
      { keyword: SMS_KEYWORD.food, category: SMS_CATEGORY.food },
      { keyword: SMS_KEYWORD.payment, category: SMS_CATEGORY.billPayment },
      { keyword: SMS_KEYWORD.swiggy, category: SMS_CATEGORY.food },
      { keyword: SMS_KEYWORD.bbpsbp, category: SMS_CATEGORY.billPayment },
      // Add more rules as needed
    ];
  }

  public classifySMS(smsList: SMS[]): APIResponse {
    const spendSummary: SpendSummary[] = [];

    for (const sms of smsList) {
      const category = this.classifyText(sms.text);
      const amount = this.extractAmount(sms.text);

      if (category && amount) {
        const existingSummary = spendSummary.find(
          (summary) => summary.category === category,
        );

        if (existingSummary) {
          existingSummary.totalAmount = (
            parseFloat(existingSummary.totalAmount) + parseFloat(amount)
          ).toFixed(2);
          existingSummary.smsArray.push(sms);
        } else {
          spendSummary.push({
            category,
            totalAmount: amount,
            smsArray: [sms],
          });
        }
      }
    }

    return { summary: spendSummary };
  }

  private classifyText(text: string): string | undefined {
    for (const rule of this.rules) {
      if (text.toLowerCase().includes(rule.keyword.toLowerCase())) {
        return rule.category;
      }
    }
    return undefined;
  }

  private extractAmount(text: string): string | undefined {
    const amountRegex = /Rs\.(\d+(?:\.\d{1,2})?)/i;
    const match = text.match(amountRegex);

    return match ? match[1] : undefined;
  }
}
