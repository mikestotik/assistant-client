import { SignInPayload, SignUpPayload } from './auth.interfaces.ts';
import { AuthResource } from './auth.resource';


class AuthService {

  private readonly resource = new AuthResource();


  public async signUp(payload: SignUpPayload) {
    return this.resource.signUp(payload)
      .then(res => res.data);
  }


  public async signIn(payload: SignInPayload) {
    return this.resource.signIn(payload)
      .then(res => res?.data);
  }


  public async signOut() {
    return this.resource.signOut();
  }


  public async refreshAccessToken(refresh: string) {
    return this.resource.refreshToken(refresh)
      .then(res => res.data);
  }

}


export const authService = new AuthService();