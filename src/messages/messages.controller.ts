import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "List of messages";
  }

  @Post()
  createMessage() {
    return "got your post"
  }

  @Get('/:id')
  getMessage() {
    "Your required message."
  }
}
