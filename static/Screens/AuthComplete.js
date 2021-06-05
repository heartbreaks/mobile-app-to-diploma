import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AddNewEmployer from "../components/AddNewEmployer";
import FinishedTasks from "../components/FinishedTasks";
import { TouchableOpacity } from "react-native-gesture-handler";

function AuthComplete(props) {
  return (
    <View style={styles.authCompleted}>
      <TouchableOpacity onPress={() => props.navigation.navigate("AddNewTaskScreen")}>
        <View style={styles.card}>
          <Text style={{ textAlign: 'center',padding: 15, color: "white", position: 'absolute', top: '30%' }}>Создать задачу</Text>
        </View>
      </TouchableOpacity>
      {props.userRole === 2 ? (
        <AddNewEmployer navigation={props.navigation} />
      ) : (
        console.log(123)
      )}
      <FinishedTasks navigation={props.navigation} />
      <TouchableOpacity onPress={() => {
        console.log(props.navigation.navigate(''))
        props.navigation.navigate("BacklogScreen")
      }}>
        <View style={styles.card}>
          <Text style={{ textAlign: 'center', padding: 15, color: "white", position: 'absolute', top: '30%' }}>Беклог</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authCompleted: {
    flex: 1,
    justifyContent: "center",
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '50%'
  },
  card: {
    backgroundColor: "#2D9BF0",
    margin: 5,
    shadowColor: "#000",
    width: 150,
    height: 150,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 30,
  },
});

function mapStateToProps(state) {
  const { userRole } = state;
  return { userRole };
}

export default connect(mapStateToProps)(AuthComplete);
