import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SMSController } from './controllers/sms-classifier.controller';
import { SMSModule } from './packages/sms.module';

@Module({
  imports: [SMSModule],
  controllers: [AppController, SMSController],
  providers: [AppService],
})
export class AppModule {}
