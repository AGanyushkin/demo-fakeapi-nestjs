import { Injectable } from "@nestjs/common";
import { Account } from "../domain/Account";
import { faker } from '@faker-js/faker';

@Injectable()
export class AccountGeneratorService {

  generateAccounts(numberOfAccounts: number): Account[] {
    let accounts = []
    for (let i = 0; i < numberOfAccounts; ++i) {
      accounts.push({
        id: faker.datatype.uuid(),
        fullName: faker.internet.userName(),
        email: faker.internet.email(),
        active: faker.datatype.boolean()
      })
    }
    return accounts
  }
}
