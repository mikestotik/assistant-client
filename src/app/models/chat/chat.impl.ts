import { ChatMessage } from './chat.interface.ts';


export class Chat {

  public messages: ChatMessage[];


  constructor(messages: ChatMessage[] = []) {
    this.messages = messages;
  }


  addMessage(message: ChatMessage) {
    this.messages = [ ...this.messages, message ];
  }

}
