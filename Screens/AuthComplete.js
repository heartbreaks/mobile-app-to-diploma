import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AuthComplete(props) {
  return (
    <View style={styles.authCompleted}>
      <View style={styles.cardForTasks}>
        <Text style={{padding: 15}}>Создать карточку</Text>
      </View>
      <Text>Something</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  authCompleted: {
    flex: 1,
    justifyContent: "center",
  },
  cardForTasks: {
    backgroundColor: 'red',
    margin: 5,
  }
});
