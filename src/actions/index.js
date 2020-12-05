import { SIGN_IN, SIGN_OUT } from "./actionTypes";

export const signIn = (id) => {
  return { 
    type: SIGN_IN, 
    payload: {userId: id}
  }
};

export const signOut = () => ({type: SIGN_OUT});