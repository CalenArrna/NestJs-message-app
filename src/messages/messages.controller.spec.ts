import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should return list of messages", function() {
    expect(controller.listMessages()).toBe("List of messages");
  });

  it("should handle posted message", function() {
    const message = {content: "Test"};

    const response = controller.createMessage(message);

    expect(response).toBe(`Got your message: ${message}`);
  });

  it("should handle calls to an ID", function() {
    const id = '12';

    const response = controller.getMessage(id);

    expect(response).toBe(`Your message id is: ${id}`);
  });
});
