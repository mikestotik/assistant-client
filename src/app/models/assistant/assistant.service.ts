import http from '../../config/http.config.ts';
import { CoreApiUri } from '../../const/api.const.ts';
import { Assistant, CreateAssistantPayload, UpdateAssistantPayload } from './assistant.interface.ts';


class AssistantService {


  public async load() {
    return http.get<Assistant[]>(CoreApiUri.ASSISTANT)
      .then(res => res?.data);
  }


  public async delete(id: string) {
    return http.delete(`${ CoreApiUri.ASSISTANT }/${ id }`);
  }


  public async create(payload: CreateAssistantPayload) {
    return http.post<Assistant>(CoreApiUri.ASSISTANT, payload)
      .then(res => res?.data);
  }


  public async update(id: string, payload: UpdateAssistantPayload) {
    return http.patch<Assistant>(`${ CoreApiUri.ASSISTANT }/${ id }`, payload)
      .then(res => res?.data);
  }
}


export const assistantService = new AssistantService();
