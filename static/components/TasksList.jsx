import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getTasks } from "../Redux/actions";
import Task from "./Task";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
    // this.showTasks = this.showTasks.bind(this);
  }

  componentDidMount() {
    const onInitScreen = () => {
      this.props.getTasks(this.props.userId);
    };
    onInitScreen();
    setTimeout(onInitScreen, 300000);
  }

  // showTasks() {
  //   const { tasks } = this.props;
  //   return tasks.map(task => {
  //     return <Task key={task.id} id={task.id}/>;
  //   });
  // }

  render() {
    const { tasks } = this.props;
    return (
      <View style={styles.tasksList}>
        {tasks ? tasks.map(task => {
          return <Task key={task.id} id={task.id}/>; 
        }) : <Text>Load</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
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
