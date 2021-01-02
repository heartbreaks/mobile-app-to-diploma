import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppNavigator from "../Navigation/AppNavigator";

export default function AuthComplete(props) {
  return (
    <View style={styles.Authcompleted}>
      <Text>Auth completed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Authcompleted: {
    flex: 1,
    justifyContent: "center",
  },
});
