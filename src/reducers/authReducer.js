import {AUTH_CHANGE} from '../actions/actionTypes'; 

const INITIAL_STATE =  {
  isSignedIn: null
}

const authReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return {...state, isSignedIn: action.payload};
    default:
      return state;
  }
};

export default authReducer;