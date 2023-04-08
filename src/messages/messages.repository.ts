import { readFile, writeFile } from "fs/promises";
import {Injectable} from "@nestjs/common";

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.getJsonFromFile();

    return messages[id];
  }

  async findAll() {
    return await this.getJsonFromFile();
  }

  async create(content: string) {
    const messages = await this.getJsonFromFile();

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile("messages.json", JSON.stringify(messages));
  }

  private async getJsonFromFile() {
    const content = await readFile("messages.json", "utf-8");
    return JSON.parse(content);
  }
}