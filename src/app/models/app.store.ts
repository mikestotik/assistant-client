import { AssistantStore } from './assistant/assistant.store.ts';
import { AuthStore } from './auth/auth.store.ts';
import { AccountStore } from './account/account.store.ts';


export class AppStore {

  public readonly authStore = new AuthStore();
  public readonly accountStore = new AccountStore();
  public readonly assistantStore = new AssistantStore();

}
