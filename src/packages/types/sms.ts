export interface SMS {
  time: string;
  sender: string;
  text: string;
}

export interface SpendSummary {
  category: string;
  totalAmount: string;
  smsArray: SMS[];
}

export interface APIResponse {
  summary: SpendSummary[];
}

export enum SMS_KEYWORD {
  flight = 'flight',
  train = 'train',
  railway = 'railway',
  food = 'food',
  payment = 'payment',
  swiggy = 'swiggy',
  zomato = 'zomato',
  bbpsbp = 'BBPSBP',
  purchase= 'purchase'

}

export enum SMS_CATEGORY {
  travel = 'Travel',
  food = 'Food',
  billPayment = 'Bill Payment',
  shopping = 'Shopping',
}
