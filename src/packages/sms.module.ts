import { Module } from '@nestjs/common';
import { SMSClassifierService } from './services/sms.service';

@Module({
  imports: [],
  providers: [
    {
      provide: 'SMSClassifierService',
      useClass: SMSClassifierService,
    },
  ],
  exports: ['SMSClassifierService'],
})
export class SMSModule {}
