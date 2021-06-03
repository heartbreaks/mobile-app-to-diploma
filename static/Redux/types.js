import {Alert} from "react-native";

export const AUTH_USER = 'AUTH_USER'
export const GET_TICKETS = 'GET_TICKETS'
export const GET_EMPLOYERS = 'GET_EMPLOYERS'
export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const GET_BACKLOG_TASKS = 'GET_BACKLOG_TASKS'
export const UPDATE_BACKLOG_LIST = 'UPDATE_BACKLOG_LIST'

//for sql
// INSERT INTO `backlog` (`id`, `title`, `body`, `date`, `level_primary`, `appointment_by`) VALUES ('1', 'Textt 1', 'asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa', '2021-06-18', '1', '1'), ('2', 'Textt 2', 'asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa', '2021-06-11', '1', '1');
