import http from '../../config/http.config.ts';
import { CoreApiUri } from '../../const/api.const.ts';
import { ChatMessage, CreateUserMessage } from './chat.interface.ts';


class ChatService {

  public async load(assistantId: string) {
    return http.get<ChatMessage[]>(CoreApiUri.MESSAGE, { params: { assistantId } })
      .then(res => res?.data);
  }


  public async create(payload: CreateUserMessage) {
    return http.post<ChatMessage>(CoreApiUri.MESSAGE, payload)
      .then(res => res?.data);
  }


  public async update(id: number, payload: CreateUserMessage) {
    return http.patch<ChatMessage>(`${ CoreApiUri.MESSAGE }/${ id }`, payload)
      .then(res => res?.data);
  }


  public async delete(id: number) {
    return http.delete(`${ CoreApiUri.MESSAGE }/${ id }`);
  }
}


export const chatService = new ChatService();
