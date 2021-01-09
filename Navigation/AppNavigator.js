import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AuthComplete from "../Screens/AuthComplete";
import { TasksScreen} from "../Screens/TasksScreen";
import {CurrentTask} from "../Screens/CurrentTask";

const _AuthCompleteNavigator = createStackNavigator({
  AuthComplete: {
    screen: AuthComplete,
    navigationOptions: {
      title: "Главная",
    },
  },
});

const _TasksNavigator = createStackNavigator({
  TasksScreen: {
    screen: TasksScreen,
    navigationOptions: {
      title: "Задачи",
    },
  },
  CurrentTask: {
    screen: CurrentTask,
    navigationOptions: {
      title: "Текущая задача",
    },
  },
});

const AppNavigator = createBottomTabNavigator({
  AuthComplete: {
    screen: _AuthCompleteNavigator,
    navigationOptions: {
      title: "Главная",
    },
  },
  TasksScreen: {
    screen: _TasksNavigator,
    navigationOptions: {
      title: "Мои Задачи",
    },
  },
}, {initialRouteName: 'TasksScreen'});

export default createAppContainer(AppNavigator);
