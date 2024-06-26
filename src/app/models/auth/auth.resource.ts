import http from '../../config/http.config.ts';
import { CoreApiUri } from '../../const/api.const.ts';
import { LoginResponse, SignInPayload, SignUpPayload } from './auth.interfaces.ts';


export class AuthResource {


  public signIn(payload: SignInPayload) {
    return http.post<LoginResponse>(CoreApiUri.AUTH_SIGN_IN, payload);
  }


  public signUp(payload: SignUpPayload) {
    return http.post<LoginResponse>(CoreApiUri.ACCOUNT, payload);
  }


  public signOut() {
    return http.get<void>(CoreApiUri.AUTH_SIGN_OUT);
  }


  public refreshToken(refresh: string) {
    return http.post<LoginResponse>(CoreApiUri.AUTH_REFRESH, { refresh });
  }

}
