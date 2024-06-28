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

export interface ChatUserMessage {
  message: string;
}
