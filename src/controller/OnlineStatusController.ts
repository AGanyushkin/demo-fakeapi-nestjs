import { Controller, Get, Header, HttpCode, Query } from "@nestjs/common";
import { OnlineStatusService } from "../service/OnlineStatusService";
import { OnlineStatus } from "../domain/OnlineStatus";

@Controller('/status')
export class OnlineStatusController {
  constructor(private onlineStatusService: OnlineStatusService) {
  }

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  getAccountStatus(@Query("accountId") accountId: string): OnlineStatus {
    return this.onlineStatusService.generateOnlineStatus(accountId)
  }
}
