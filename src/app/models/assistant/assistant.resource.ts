import http from '../../config/http.config';
import { CoreApiUri } from '../../const/api.const.ts';
import { Assistant } from './assistant.interface.ts';


export class AssistantResource {

  public async load() {
    return http.get<Assistant[]>(CoreApiUri.ASSISTANT);
  }


  public delete() {
    return http.delete(CoreApiUri.ASSISTANT);
  }
}
