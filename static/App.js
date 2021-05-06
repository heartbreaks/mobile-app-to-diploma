import React from "react";
import { StyleSheet } from "react-native";
import {Provider} from 'react-redux' 
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Redux/rootReducer'
import thunk from 'redux-thunk'
import GeneralScreen from "./Screens/GeneralScreen";

export default function App(props) {
  const store = createStore(rootReducer, applyMiddleware(
    thunk
  ))
  
  return (
    <Provider store={store}>
      <GeneralScreen />
    </Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
