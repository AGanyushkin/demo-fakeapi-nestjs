import { Controller, Get, Header, HttpCode, Query } from "@nestjs/common";
import { MessageGeneratorService } from "../service/MessageGeneratorService";
import { Message } from "../domain/Message";
import { Observable } from "rxjs";

@Controller('/message')
export class MessageController {
  constructor(private messageGeneratorService: MessageGeneratorService) {
  }

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  generateMessages(@Query("ownerId") ownerId: string,
                   @Query("size") size: number): Observable<Message[]> {
    return this.messageGeneratorService.generateMessages(ownerId, +size)
  }
}
