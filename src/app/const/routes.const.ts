export namespace RoutePaths {
  export const AUTH = '/auth';
  export const AUTH_SIGN_IN = `${ AUTH }/sign-in`;
  export const AUTH_SIGN_UP = `${ AUTH }/sign-up`;
  export const AUTH_SIGN_UP_CONFIRMATION = `${ AUTH_SIGN_UP }/confirmation`;
  export const AUTH_CHANGE_PASSWORD = `${ AUTH }/change-password`;

  export const MAIN = '/main';

  export const ASSISTANT = `${ MAIN }/assistant`;
  export const ASSISTANT_CHAT = `${ MAIN }/assistant/:id`;
}
