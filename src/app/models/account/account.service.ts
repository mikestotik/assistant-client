import { AccountResource } from './account.resource.ts';


class AccountService {

  private readonly resource = new AccountResource();


  public async load() {
    return this.resource.load()
      .then(res => res?.data);
  }


  public async delete() {
    return this.resource.delete();
  }

}


export const accountService = new AccountService();
