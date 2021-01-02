import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AuthComplete from "../Screens/AuthComplete";
import { TasksScreen } from "../Screens/TasksScreen";

const _AuthCompleteNavigator = createStackNavigator({
  AuthComplete: {
    screen: AuthComplete,
    navigationOptions: {
      title: "Главная",
    },
  },
});

const _TasksNavigator = createStackNavigator({
  AuthComplete: {
    screen: TasksScreen,
    navigationOptions: {
      title: "Задачи",
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
});

export default createAppContainer(AppNavigator);
