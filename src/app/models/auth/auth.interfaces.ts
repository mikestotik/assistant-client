export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}


export interface SignInPayload {
  email: string;
  password: string;
}


export interface SignUpPayload {
  email: string;
  password: string;
}