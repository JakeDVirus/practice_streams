import { mapKeys } from "../util/lodash-alt";

import { 
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/actionTypes";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ...mapKeys(action.payload, "id")};
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      return (({[action.payload]: deleted, ...newState}) => newState)(state);
    default:
      return state
  }
};

export default streamReducer;