import axios from "axios";
import { AUTH_USER, GET_EMPLOYERS, ADD_NEW_TASK } from "./types";
import {Alert} from "react-native";

export const toLogin = (login, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: AUTH_USER,
        response: {fetching: true,},
      });
      const res = await axios.post(
        `http://192.168.1.6:80/auth?login=${login}&password=${password}`
      );
      const users = await axios.get(`http://192.168.1.6:80/employers`);

      dispatch({
        type: AUTH_USER,
        response: Object.assign({}, res, {fetching: false}),
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
                console.log(err);
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
        `http://192.168.1.6:5000/tasks`, {
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
      console.log(err);
    }
  };
};

export const addNewTask = dataFlow => {
  return async dispatch => {
    try {
      const {executor, title, body, date,levelPrimary, appointment_by, ended} = dataFlow
      const res = await axios.post(
        `http://192.168.1.6:5000/tasks/add?executor=${executor}&title=${title}&body=${body}&date=${date}&level_primary=${levelPrimary}&appointment_by=${appointment_by}&ended=${ended}`
      );

      return { code: 200, msg: "Success", res };
    } catch (err) {
      console.log(err);
      return Alert.alert(
          `Ошибка`,
          "В данный момент сервис не доступен, попробуйте снова чуть позже",
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
