import axios from "axios";
import {
  AUTH_USER,
  GET_EMPLOYERS,
  ADD_NEW_TASK,
  GET_BACKLOG_TASKS,
  UPDATE_BACKLOG_LIST,
  CREATE_NEW_TASK_TO_BACKLOG
} from "./types";
import {Alert} from "react-native";

const url = `https://pipine.herokuapp.com`

export const toLogin = (login, password) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${url}/auth?login=${login}&password=${password}`
      );
      const users = await axios.get(`${url}/employers`);

      dispatch({
        type: AUTH_USER,
        response: res,
      });

      dispatch({
        type: GET_EMPLOYERS,
        response: users,
      });
    } catch (err) {
      return Alert.alert(
          "Ошибка авторизации",
          "Введенные вами данные неккоректны, проверьте имя пользователя и пароль",
          [
            {
              text: "Ok"
            },
          ]
      );
    }
  };
};

export const getTasks = userId => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${url}/tasks`, {
          params: {
            executor: userId
          }
        }
      );
      dispatch({
        type: 'GET_TICKETS',
        response: res,
      });
    } catch (err) {
    }
  };
};

export const addNewTask = dataFlow => {
  return async dispatch => {
    try {
      const {executor, title, body, date,levelPrimary, appointment_by, ended} = dataFlow
      const res = await axios.post(
        `${url}/tasks/add?executor=${executor}&title=${title}&body=${body}&date=${date}&level_primary=${levelPrimary}&appointment_by=${appointment_by}&ended=${ended}`
      );

      return { code: 200, msg: "Success", res };
    } catch (err) {
      return Alert.alert(
          `Ошибка`,
          "В данный момент сервис не доступен, попробуйте снова чуть позже",
          [
            {
              text: "Ok"
            },
          ]
      );
    }
  };
};

export const createNewEmployer = employerInfo => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${url}/register?password=${employerInfo.password}&role=${employerInfo.role}&name=${employerInfo.name}&position=${employerInfo.position}&login=${employerInfo.login}`
      );

      return { code: 201, msg: "User created" };
    } catch (err) {
    }
  };
};

export const endTask = (id, end) => {
  return async dispatch => {
    try {
      const res = await axios.put( `${url}/tasks/end-task?id=${id}&ended=${end}`)
      Alert.alert(
          `Успешно`,
          "Поздравляю! Вы завершили задачу, обновите страницу что бы актуализировать задачи.",
          [
            {
              text: "Ok"
            },
          ]
      );

      dispatch({
        type: 'CLOSE_TASK',
        response: {id, status: 'success'}
      })

    }catch (err) {}
  }
}

export const getBacklog = () => {
  return async dispatch => {
    try{
      const res = await axios.get(`${url}/backlog`)

      dispatch({
        type: GET_BACKLOG_TASKS,
        response: res
      })
    }catch (err) {

    }
  }
}

export const getTaskBacklog = (taskId, userId) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${url}/backlog/get-task?executor=${userId}&taskID=${taskId}`)

      Alert.alert(
          'Успешно',
          'Задача была добавлена в ваш список активных задач, можете приступать',
          [
              {text: 'Ок'}
          ]
      )
      dispatch({
        type: UPDATE_BACKLOG_LIST,
        response: res,
        taskId: taskId
      })
    }catch (e) {
     if (e.message == 'Request failed with status code 403') {
       return Alert.alert(
           'Ошибка',
           'Такой задачи уже нет',
           [
             {text: 'Ок'}
           ]
       )
     }

    }

  }
}


export const createTaskBacklog = (data) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${url}/backlog/add?title=${data.title}&body=${data.body}&date=${data.date}&level_primary=${data.levelPrimary}&appointment_by=${data.appointment_by}`)
      dispatch({
        type: CREATE_NEW_TASK_TO_BACKLOG,
        response: res.data.taskBacklog
      })
      return Alert.alert(
          "Успешно",
          "Задача была добавлена в бэклог. Теперь ее все видят",
          [
            {
              text: "Ok",
              onPress: () => {
                console.log("Создана задача в бэклоге");
              },
            },
          ]
      )
    }catch (e) {
      return Alert.alert(
          "Ошибка",
          "Во время запроса произошла ошибка, попробуйте снова позже",
          [
            {
              text: "Ok",
              onPress: () => {
                console.log(e.message);
              },
            },
          ]
      )
    }
  }
}