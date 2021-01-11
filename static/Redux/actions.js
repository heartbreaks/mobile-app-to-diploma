import axios from "axios";
import { Alert } from "react-native";
import { AUTH_USER, GET_EMPLOYERS } from "./types";

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
