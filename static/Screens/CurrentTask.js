import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function CurrentTask({ navigation }) {
  console.log();
  return (
    <View style={styles.container}>
      <View style={{ padding: 5, textAlign: "center" }}>
        <Text style={{ fontSize: 18, color: "white", textAlign: "left" }}>
          {navigation.getParam("title")}
        </Text>
      </View>
      <View style={{ borderWidth: 2, padding: 13, borderColor: "white" }}>
        <Text style={{ fontSize: 16, color: "white", textAlign: "left" }}>
          {navigation.getParam("body")}
        </Text>
      </View>
      <View></View>
      <TouchableOpacity>
        <View style={styles.finishTask}>
          <Text
            style={{
              fontSize: 16,
              color: "#242423",
              textAlign: "center",
              padding: 4,
            }}
          >
            Завершить задачу
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#242423",
  },
  finishTask: {
    backgroundColor: "#f5cb5c",
    borderColor: "#f5cb5c",
    borderWidth: 2,
    borderRadius: 13,
    padding: 10,
    margin: 5,
    fontSize: 27,
  },
});
