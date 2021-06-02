import axios from "axios";
import { AUTH_USER, GET_EMPLOYERS, ADD_NEW_TASK, GET_BACKLOG_TASKS } from "./types";
import {Alert} from "react-native";

const url = `http://192.168.1.6:500`

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
      return Alert.alert(
          `Успешно`,
          "Поздравляю! Вы завершили задачу, обновите страницу что бы актуализировать задачи.",
          [
            {
              text: "Ok"
            },
          ]
      );

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