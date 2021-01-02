import { AUTH_USER, GET_TICKETS } from "./types";

const initialState = {
  token: null,
  tasks: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, ...action.response.data };
    case GET_TICKETS:
      return { ...state, tasks: action.response.data };
    default:
      return state;
  }
}
