import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function Task(props) {
  const { currentTask } = props;
  return (
    <View style={styles.task}>
      <Text>{currentTask.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    task: {
        borderWidth: 2,
        marginTop: 12,
        padding: 12,
        borderRadius: 8,
        color: "#666",
        backgroundColor: "#eaeaea"
    }
})

function mapStateToProps(state, ownProps) {
  const currentTask = state.tasks.find(elem => elem.id == ownProps.id);
  return { currentTask };
}

export default connect(mapStateToProps)(Task);
