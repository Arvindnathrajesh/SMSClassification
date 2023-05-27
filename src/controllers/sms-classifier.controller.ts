import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SMSClassifierService } from 'src/packages/services/sms.service';
import { SMS } from 'src/packages/types/sms';

@Controller({ path: '/sms' })
export class SMSController {
  constructor(
    @Inject('SMSClassifierService')
    private smsClassifierService: SMSClassifierService,
  ) {}

  @Post('/classify')
  public async createCategory(@Body() smsList: SMS[]) {
    return await this.smsClassifierService.classifySMS(smsList);
  }
}
