import { makeAutoObservable, runInAction } from 'mobx';
import { Chat } from './chat.impl.ts';
import { CreateUserMessage } from './chat.interface.ts';
import { chatService } from './chat.service.ts';


export class ChatStore {

  public chats = new Map<string, Chat>();


  constructor() {
    makeAutoObservable(this);
  }


  selectChat = (assistantId: string) => this.chats.get(assistantId);


  async load(assistantId: string) {
    if (!this.chats.has(assistantId)) {
      const result = await chatService.load(assistantId);
      runInAction(() => this.chats.set(assistantId, new Chat(result)));
    }
  }


  public async create(payload: CreateUserMessage) {
    const result = await chatService.create(payload);
    const chat = this.selectChat(payload.assistant)!;
    runInAction(() => chat.addMessage(result));
  }
}
