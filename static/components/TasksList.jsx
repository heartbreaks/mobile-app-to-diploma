import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getTasks } from "../Redux/actions";
import Task from "./Task";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const onInitScreen = () => {
      this.props.getTasks(this.props.userId);
    };
    onInitScreen();
    setTimeout(onInitScreen, 300000);
  }

  render() {
    const { tasks, navigation } = this.props;
    return (
      <ScrollView style={styles.tasksList}>
        {tasks == null || tasks.length == 0 ? <Text>У вас нет задач</Text> : tasks ? (
          tasks.map(task => {
            return <Task key={task.id} navigation={navigation} id={task.id} />;
          })
        ) : (<Text>Load</Text>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
    maxWidth: '99%',
    minWidth: '99%',
    flexDirection: "column",
  },
});

function mapStateToProps(state) {
  const { userId, tasks } = state;
  return {
    userId,
    tasks,
  };
}

export default connect(mapStateToProps, { getTasks })(TasksList);
