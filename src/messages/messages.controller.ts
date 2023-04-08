import { Controller, Get, Post, Param, Body, NotFoundException } from "@nestjs/common";
import {CreateMessageDto} from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller('messages')
export class MessagesController {
  constructor(private MessagesService: MessagesService) {
  }
  @Get()
  listMessages() {
    return this.MessagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.MessagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.MessagesService.findOne(id);

    if(message) {
      return message;
    }

    throw new NotFoundException('Message not found!')
  }
}
