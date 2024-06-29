import { StreamEvent } from '@langchain/core/tracers/log_stream';


export enum ChatMessageType {
  USER = 'USER',
  ASSISTANT = 'ASSISTANT',
}


export interface ChatAssistantMessage {
  event: StreamEvent;
  assistantId: string;
}


export interface CreateUserMessage {
  text: string;
  assistant: string;
}


export interface ChatMessage {
  id: number;
  type: ChatMessageType;
  text: string;
  assistant: string;
  created: string | Date;
  updated: string | Date;
}



