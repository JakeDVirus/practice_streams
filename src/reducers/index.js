import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from './authReducer';
import streamReducer from './streamReducer';

const reducers = combineReducers({
  auth: authReducer,
  streams: streamReducer,
  form: formReducer,
});

export default reducers;