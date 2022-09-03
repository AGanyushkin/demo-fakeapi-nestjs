import { Module } from '@nestjs/common';
import { AccountController } from "./controller/AccountController";
import { MessageController } from "./controller/MessageController";
import { OnlineStatusController } from "./controller/OnlineStatusController";
import { AccountGeneratorService } from "./service/AccountGeneratorService";
import { MessageGeneratorService } from "./service/MessageGeneratorService";
import { OnlineStatusService } from "./service/OnlineStatusService";

@Module({
  imports: [],
  controllers: [
    AccountController,
    MessageController,
    OnlineStatusController
  ],
  providers: [
    AccountGeneratorService,
    MessageGeneratorService,
    OnlineStatusService
  ],
})
export class AppModule {}
