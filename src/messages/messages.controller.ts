import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {CreateMessageDto} from "./dtos/create-message.dto";

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "List of messages";
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return `Got your message: ${body}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return `Your message id is: ${id}`;
  }
}
