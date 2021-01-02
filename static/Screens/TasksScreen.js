import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TasksList from "../components/TasksList";

export function TasksScreen() {
  return (
    <View style={styles.container}>
      <TasksList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
});
