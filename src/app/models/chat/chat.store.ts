import { makeAutoObservable, runInAction } from 'mobx';
import { Chat } from './chat.impl.ts';
import { chatService } from './chat.service.ts';


export class ChatStore {

  public chats = new Map<string, Chat>();


  constructor() {
    makeAutoObservable(this);
  }


  selectChat = (assistantId: string) => this.chats.get(assistantId);


  async load(assistantId: string) {
    const result = await chatService.load(assistantId);

    if (!this.chats.has(assistantId)) {
      runInAction(() => this.chats.set(assistantId, new Chat(result)));
    }
  }

}
