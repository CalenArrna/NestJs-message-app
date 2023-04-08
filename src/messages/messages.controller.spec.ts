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
    controller.listMessages().then((value)=>{
      expect(value).toBe({});
    })

  });
});
