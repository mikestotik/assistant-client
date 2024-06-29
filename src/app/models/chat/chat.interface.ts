export enum ChatMessageType {
  USER = 'USER',
  ASSISTANT = 'ASSISTANT',
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