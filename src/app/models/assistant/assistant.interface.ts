export interface CreateAssistantPayload {
  title: string;
  desc?: string;
  logo?: string;
}

interface ModelOptions {
  model: string;
  temperature?: number;
}

export interface UpdateAssistantPayload {
  title?: string;
  desc?: string;
  logo?: string;
  model?: ModelOptions;
}


export interface Assistant {
  id: string;
  created: string | Date;
  updated: string | Date;
  title: string;
  desc: string;
  logo: string;
}
