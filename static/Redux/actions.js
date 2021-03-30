import axios from "axios";
import { AUTH_USER, GET_EMPLOYERS, ADD_NEW_TASK } from "./types";
import {Alert} from "react-native";

export const toLogin = (login, password) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `http://192.168.1.6:5000/auth?login=${login}&password=${password}`
      );
      const users = await axios.get(`http://192.168.1.6:5000/employers`);

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
              text: "Ok",
              onPress: () => {
                console.log("Errno");
              },
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
        `http://192.168.1.6:5000/tasks?executor=${userId}`
      );
      dispatch({
        type: AUTH_USER,
        response: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewTask = dataFlow => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `http://192.168.1.6:5000/tasks/add?executor=${dataFlow.executor}&title=${dataFlow.title}&body=${dataFlow.body}&date=${dataFlow.date}&level_primary=${dataFlow.levelPrimary}`
      );

      return { code: 200, msg: "Success" };
    } catch (err) {
      return Alert.alert(
          `Ошибка`,
          "В данный момент сервис не доступен, попробуйте снова чуть позжеы",
          [
            {
              text: "Ok",
              onPress: () => {
                console.log("Errno");
              },
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
        `http://192.168.1.6:5000/register?password=${employerInfo.password}&role=${employerInfo.role}&name=${employerInfo.name}&position=${employerInfo.position}&login=${employerInfo.login}`
      );

      return { code: 201, msg: "User created" };
    } catch (err) {
      console.log(err);
    }
  };
};
