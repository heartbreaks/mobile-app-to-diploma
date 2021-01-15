import axios from "axios";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Alert } from "react-native";
import { AUTH_USER, GET_EMPLOYERS, ADD_NEW_TASK } from "./types";

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
      console.log("Смэрть", err);
    }
  };
};

export const getTasks = userId => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `http://192.168.1.6:5000/tasks?executor=${userId}`
      );
      console.log(res);
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
      console.log("Add");
      return { code: 200, msg: "Success" };
    } catch (err) {
      console.log(err);
    }
  };
};
