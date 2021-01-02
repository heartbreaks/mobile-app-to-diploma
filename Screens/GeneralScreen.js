import React from "react";
import { StyleSheet, View } from "react-native";
import Auth from "../Navigation/Auth";
import AppNavigator from "../Navigation/AppNavigator";
import { connect } from "react-redux";

function GeneralScreen(props) {
  return (
    <View style={styles.container}>
      {props.token != null ? <AppNavigator /> : <Auth />}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

function mapStateToProps(state){
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(GeneralScreen)