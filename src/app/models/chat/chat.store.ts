import { makeAutoObservable, runInAction } from 'mobx';
import {
  ChatAssistantMessageChunk,
  ChatAssistantMessageEnd,
  ChatAssistantMessageStart,
  ChatMessage,
  CreateUserMessage
} from './chat.interface.ts';
import { chatService } from './chat.service.ts';


export class ChatStore {

  public chats = new Map<string, ChatMessage[]>();


  constructor() {
    makeAutoObservable(this);
  }


  public selectChat = (assistantId: string) => this.chats.get(assistantId);


  public async load(assistantId: string) {
    if (!this.chats.has(assistantId)) {
      const result = await chatService.load(assistantId);

      runInAction(() => this.chats.set(assistantId, result.reverse()));
    }
  }


  public async createUserMessage(payload: CreateUserMessage) {
    const result = await chatService.create(payload);
    const chat = this.selectChat(payload.assistant)!;

    runInAction(() => chat.unshift(result));
  }


  public onAssistantMessageStart = ({ assistantId, message }: ChatAssistantMessageStart) => {
    const chat = this.selectChat(assistantId)!;
    runInAction(() => chat.unshift(message));
  };


  public onAssistantMessageStream = ({ assistantId, event }: ChatAssistantMessageChunk) => {
    const chat = this.selectChat(assistantId)!;
    const newContent = event.data.chunk.kwargs.content;
    const messages = chat.map(msg => {
      if (msg.meta?.runId === event.run_id) {
        return {
          ...msg,
          text: msg.text + newContent
        };
      }
      return msg;
    });
    this.chats.set(assistantId, messages);
  };


  public onAssistantMessageEnd = ({ assistantId, message, event }: ChatAssistantMessageEnd) => {
    console.log(assistantId, message, event);
  };
}
