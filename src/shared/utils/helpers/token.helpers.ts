import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE } from "../constants";

type TokenType = "auth";

export const setToken = (tokenType: TokenType, token: string): void => {
  if (tokenType === "auth") {
    cookie.remove(AUTH_TOKEN_COOKIE);
    cookie.set(AUTH_TOKEN_COOKIE, token);
  }
};

export const getToken = (tokenType: TokenType): string | undefined => {
  if (tokenType === "auth") {
    return cookie.get(AUTH_TOKEN_COOKIE);
  }

  return undefined;
};

/* ---- Remove both auth tokens from local storage ---- */
export const deleteLocalAuthTokens = (): void => {
  cookie.remove(AUTH_TOKEN_COOKIE);
};
