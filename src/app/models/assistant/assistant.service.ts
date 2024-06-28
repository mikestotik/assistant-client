import http from '../../config/http.config.ts';
import { CoreApiUri } from '../../const/api.const.ts';
import { Assistant, ChatUserMessage, CreateAssistantPayload } from './assistant.interface.ts';
import { AssistantResource } from './assistant.resource.ts';


class AssistantService {

  private readonly resource = new AssistantResource();


  public async load() {
    return this.resource.load()
      .then(res => res?.data);
  }


  public async delete() {
    return this.resource.delete();
  }


  public async create(payload: CreateAssistantPayload) {
    return http.post<Assistant>(CoreApiUri.ASSISTANT, payload)
      .then(res => res?.data);
  }


  public async sendMessage(message: ChatUserMessage) {
    return http.post<Assistant>(CoreApiUri.ASSISTANT_MESSAGE, message)
      .then(res => res?.data);
  }
}


export const assistantService = new AssistantService();
