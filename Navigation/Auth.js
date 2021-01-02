import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import AuthPage from "../AuthPage.jsx";
import AuthComplete from "../Screens/AuthComplete.js";

const _Autenification = createStackNavigator({
  Autenification: {
    screen: AuthPage,
    navigationOptions: {
      title: "Авторизация",
    },
  },
  AfterAutenification: {
    screen: AuthComplete,
    navigationOptions: {
      title: "Somebody",
    },
  },
});

export default createAppContainer(_Autenification);
