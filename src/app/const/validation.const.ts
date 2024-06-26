export namespace Validation {
  export const PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*\d)[\w!@#$%^&*()_+{}|:"<>?~`\-=[\]\\;',./]*.{6,25}$/;
  export const CODE_REGEXP = /^[0-9]{6}$/;
}