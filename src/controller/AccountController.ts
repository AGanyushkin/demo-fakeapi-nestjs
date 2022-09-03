import { Controller, Get, Header, HttpCode, Query } from "@nestjs/common";
import { AccountGeneratorService } from "../service/AccountGeneratorService";
import { Account } from "../domain/Account";

@Controller('/account')
export class AccountController {
  constructor(private accountGeneratorService: AccountGeneratorService) {
  }

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  generateAccounts(@Query("size") size: number): Account[] {
    return this.accountGeneratorService.generateAccounts(size)
  }
}
