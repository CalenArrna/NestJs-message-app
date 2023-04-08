import { MessagesRepository } from "./messages.repository";
import {Injectable} from "@nestjs/common";
@Injectable()
export class MessagesService {

  constructor(private MessagesRepo: MessagesRepository) {
  }

  findOne(id: string) {
    return this.MessagesRepo.findOne(id);
  }

  findAll() {
    return this.MessagesRepo.findAll();
  }

  create(message: string) {
    return this.MessagesRepo.create(message);
  }
}