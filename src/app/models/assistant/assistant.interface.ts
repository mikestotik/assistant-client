import { StreamEvent } from '@langchain/core/tracers/log_stream';


export interface CreateAssistantPayload {
  title: string;
  desc?: string;
  logo?: string;
}


export interface Assistant {
  id: string;
  created: string | Date;
  updated: string | Date;
  title: string;
  desc: string;
  logo: string;
}


export interface ChatAssistantMessage {
  event: StreamEvent;
  assistantId: string;
}


export interface ChatUserMessage {
  message: string;
  assistantId: string;
}