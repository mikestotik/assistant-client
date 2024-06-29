import { StreamEvent } from '@langchain/core/tracers/log_stream';


export enum ChatMessageType {
  USER = 'USER',
  ASSISTANT = 'ASSISTANT',
}


export interface ChatAssistantMessageChunk {
  assistantId: string;
  event: StreamEvent;
}


export interface ChatAssistantMessageStart {
  assistantId: string;
  message: ChatMessage;
}


export interface ChatAssistantMessageEnd {
  assistantId: string;
  message: ChatMessage;
}


export interface CreateUserMessage {
  text: string;
  assistant: string;
}


interface ChatMessageMeta {
  runId: string;
}


export interface ChatMessage {
  id: number;
  type: ChatMessageType;
  text: string;
  assistant: string;
  meta?: ChatMessageMeta;
  created: string | Date;
  updated: string | Date;
}



