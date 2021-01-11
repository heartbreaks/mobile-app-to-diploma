import { AUTH_USER, GET_TICKETS, GET_EMPLOYERS } from "./types";

const initialState = {
  token: null,
  tasks: null,
  humans: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, ...action.response.data };
    case GET_TICKETS:
      return { ...state, tasks: action.response.data };
    case GET_EMPLOYERS:
      const userInfo = action.response.data.candidate.map((empl) => {
        const {id, name} = empl
        return {id, label: name, value: id}
      })
      return { ...state, humans: userInfo };
    default:
      return state;
  }
}
