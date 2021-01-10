import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AddNewEmployer from "../components/AddNewEmployer";
import FinishedTasks from "../components/FinishedTasks";
import { TouchableOpacity } from "react-native-gesture-handler";

function AuthComplete(props) {
  return (
    <View style={styles.authCompleted}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('AddNewTaskScreen')
      }}>
        <View style={styles.cardForTasks}>
          <Text style={{padding: 15, color: '#f5cb5c'}}>Создать задачу</Text>
        </View>
      </TouchableOpacity>
      {
        props.userRole === 2  ?  <AddNewEmployer navigation={props.navigation}/> : console.log(123)
      }
      <FinishedTasks navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  authCompleted: {
    flex: 1,
    justifyContent: "center",
  },
  cardForTasks: {
    backgroundColor: '#333533',
    margin: 5,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }
});

function mapStateToProps(state) {
  const { userRole } = state
  return {userRole}
}

export default connect(mapStateToProps)(AuthComplete)