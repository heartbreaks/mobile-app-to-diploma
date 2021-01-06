import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function getIndicator(type) {
  switch (type) {
    case 1:
      return (
        <Feather name="chevrons-down" size={15} color="#00acee">
          {" "}
          Normal
        </Feather>
      );
    case 2:
      return (
        <Feather name="alert-triangle" size={15} color="orange">
          {" "}
          Danger
        </Feather>
      );
    case 3:
      return (
        <FontAwesome name="pied-piper-alt" size={15} color="red">
          {" "}
          Critical
        </FontAwesome>
      );
    default:
      return <Text>Life is pain</Text>;
  }
}

function Task(props) {
  const { currentTask } = props;

  return (
    <View style={styles.task}>
      <View style={styles.head}>
        <Text
          style={
            (styles.border,
            {
              fontSize: 15,
              fontWeight: "bold",
              paddingBottom: 3,
              borderBottomColor: "white",
              borderBottomWidth: 1.5,
              color: "#fff",
            })
          }
        >
          {currentTask.title}
        </Text>
        <Text>{getIndicator(currentTask.level_primary)}</Text>
      </View>
      <View style={styles.border}>
        <Text
          style={{
            color: "#fff",
            padding: 5,
          }}
        >
          {currentTask.body}
        </Text>
      </View>
      <View>
        <Text style={{ padding: 3, color: "white", textAlign: "right" }}>
          Сделать до: {currentTask.date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    borderWidth: 1,
    marginTop: 12,
    padding: 12,
    paddingBottom: 0,
    color: "#000",
    margin: 5,
    backgroundColor: "#242423",
  },
  border: {
    borderWidth: 2,
    borderColor: "#333533",
  },
  head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function mapStateToProps(state, ownProps) {
  const currentTask = state.tasks.find(elem => elem.id == ownProps.id);
  return { currentTask };
}

export default connect(mapStateToProps)(Task);
