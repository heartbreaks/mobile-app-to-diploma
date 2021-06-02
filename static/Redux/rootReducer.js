import { AUTH_USER, GET_TICKETS, GET_EMPLOYERS } from "./types";

const initialState = {
  token: null,
  tasks: null,
  humans: null,
  fetching: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, ...action.response.data };
    case GET_TICKETS:
      const newTasks = action.response.data.tasks.map(task => {
        const cardAppointmentBy = state.humans.find(human => human.id == task.appointment_by)
        task.appointment_by = cardAppointmentBy.label
        return task
      })
      return { ...state, tasks: action.response.data.tasks};
    case GET_EMPLOYERS:
      const userInfo = action.response.data.candidate.map((empl) => {
        let {id, name} = empl
        let userNames = name.split(' ')
        name = `${userNames[0]} ${userNames[1]}`
        return {id, label: name, value: id}
      })
      return { ...state, humans: userInfo };
    default:
      return state;
  }
}
