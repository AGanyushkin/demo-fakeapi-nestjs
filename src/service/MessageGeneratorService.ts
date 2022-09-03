import { Injectable } from "@nestjs/common";
import { Message } from "../domain/Message";
import { faker } from "@faker-js/faker";
import { Observable, of, range, switchMap, toArray } from "rxjs";

@Injectable()
export class MessageGeneratorService {

  generateMessages(ownerId: string, numberOfMessages: number):
    Observable<Message[]> {

    return range(1, numberOfMessages)
      .pipe(
        switchMap((i: number): Observable<Message> => of({
          id: faker.datatype.uuid(),
          ownerId,
          text: faker.lorem.paragraph()
        })),
        toArray<Message>()
      )
  }
}
