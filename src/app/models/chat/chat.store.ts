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


  public addAssistantMessage(assistantId: string, message: ChatMessage) {
    const chat = this.selectChat(assistantId)!;
    runInAction(() => chat.unshift(message));
  }


  public updateAssistantMessage(assistantId: string, runId: string, content: string) {
    const chat = this.selectChat(assistantId)!;
    const message = chat.find(i => i.meta?.runId === runId);

    runInAction(() => {
      if (message) {
        message.text = message.text + content;
      }
    });
  }


  public onAssistantMessageStart = ({ assistantId, message }: ChatAssistantMessageStart) => {

  };


  public onAssistantMessageStream = ({ assistantId, event }: ChatAssistantMessageChunk) => {

  };


  public onAssistantMessageEnd = ({ assistantId, message }: ChatAssistantMessageEnd) => {

  };
}
