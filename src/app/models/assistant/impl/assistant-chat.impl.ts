export class ChatMessage {

  readonly id!: string;


  constructor(id: string) {
    this.id = id;
  }
}


export class AssistantChatMessage extends ChatMessage {
  constructor(id: string) {
    super(id);
  }
}


export class UserChatMessage extends ChatMessage {
  constructor(id: string) {
    super(id);
  }
}


export class Chat {

  public messages: ChatMessage[] = [];
  public assistantId!: string;


  constructor(assistantId: string) {
    this.assistantId = assistantId;
  }


  addMessage(message: ChatMessage) {
    this.messages.push(message);
  }

}