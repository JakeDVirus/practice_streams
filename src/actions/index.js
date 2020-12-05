import { AUTH_CHANGE } from "./actionTypes";

export const authChange = (auth) => {
  return { 
    type: AUTH_CHANGE, 
    payload: auth
  }
};