import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AuthComplete from "../Screens/AuthComplete";
import { TasksScreen } from "../Screens/TasksScreen";
import { CurrentTask } from "../Screens/CurrentTask";
import {BacklogCurrentTask} from '../Screens/BacklogCurrentTask'
import {BacklogScreen} from "../Screens/BacklogScreen";
import AddNewTaskScreen from "../Screens/AddNewTaskScreen";
import AddNewBacklogTask from "../Screens/AddNewBacklogTask"
import AddNewEmployerScreen from "../Screens/AddNewEmployerScreen";
import FinishedTasksScreen from "../Screens/FinishedTasksScreen";

const _AuthCompleteNavigator = createStackNavigator({
  AuthComplete: {
    screen: AuthComplete,
    navigationOptions: {
      title: "Главная",
    },
  },
  AddNewTaskScreen: {
    screen: AddNewTaskScreen,
    navigationOptions: {
      title: "Создать задачу",
    },
  },
  AddNewEmployer: {
    screen: AddNewEmployerScreen,
    navigationOptions: {
      title: "Добавить нового сотрудника",
    },
  },
  FinishedTasks: {
    screen: FinishedTasksScreen,
    navigationOptions: {
      title: "Законченные задачи",
    },
  },
  BacklogScreen: {
    screen: BacklogScreen,
    navigationOptions: {
      title: "Бэклог",
    },
  },
  BacklogCurrentTask: {
    screen: BacklogCurrentTask,
    navigationOptions: {
      title: "Задача бэклога",
    },
  },
  AddNewBacklogTask: {
    screen: AddNewBacklogTask,
    navigationOptions: {
      title: 'Создать задачу в бэклог'
    }
  }
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
});

export default createAppContainer(AppNavigator);
