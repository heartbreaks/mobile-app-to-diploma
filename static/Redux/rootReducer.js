import {
  AUTH_USER,
  GET_TICKETS,
  GET_EMPLOYERS,
  GET_BACKLOG_TASKS,
  CLOSE_TASK,
  UPDATE_BACKLOG_LIST,
  CREATE_NEW_TASK_TO_BACKLOG
} from "./types";

const initialState = {
  token: null,
  tasks: null,
  humans: null,
  fetching: false,
  backlog: null
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
    case CLOSE_TASK:
      const newTaskList = state.tasks.filter(task => task.id != action.response.id)
      return {...state, tasks: newTaskList}
    case GET_EMPLOYERS:
      const userInfo = action.response.data.candidate.map((empl) => {
        let {id, name} = empl
        let userNames = name.split(' ')
        name = `${userNames[0]} ${userNames[1]}`
        return {id, label: name, value: id}
      })
      return { ...state, humans: userInfo };
    case GET_BACKLOG_TASKS:
      const newBacklog = action.response.data.res.map(task => {
        const cardAppointmentBy = state.humans.find(human => human.id == task.appointment_by)
        task.appointment_by = cardAppointmentBy.label
        return task
      })
      return { ...state, backlog: newBacklog };
    case UPDATE_BACKLOG_LIST:
      let tasks = [action.response.data.res].map(task => {
          const cardAppointmentBy = state.humans.find(human => human.id == task.appointment_by)
          task.appointment_by = cardAppointmentBy.label
          return task
      })

      const newTask = state.tasks.concat(tasks)
      const newBacklogs = state.backlog.filter(el => el.id != action.taskId)

      return { ...state, tasks: newTask, backlog: newBacklogs };
    case CREATE_NEW_TASK_TO_BACKLOG:
      action.response.level_primary = Number(action.response.level_primary)
      const updatedBacklog = state.backlog.concat(makeNameUser([action.response], state))
      return {...state, backlog: updatedBacklog}
    default:
      return state;
  }
}


function makeNameUser(arr, state) {
  return arr.map(task => {
    const cardAppointmentBy = state.humans.find(human => human.id == task.appointment_by)
    task.appointment_by = cardAppointmentBy.label
    return task
  })
}