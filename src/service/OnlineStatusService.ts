import { Injectable } from "@nestjs/common";
import { OnlineStatus, OnlineStatusEnum } from "../domain/OnlineStatus";
import { faker } from "@faker-js/faker";

@Injectable()
export class OnlineStatusService {

  generateOnlineStatus(accountId: string): OnlineStatus {
    return ({
      accountId,
      status: faker.datatype.boolean() ?
        OnlineStatusEnum.ONLINE :
        OnlineStatusEnum.OFFLINE
    })
  }
}
