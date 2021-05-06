import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

function AddNewEmployer(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("AddNewEmployer");
      }}
    >
      <View style={styles.cardForTasks}>
        <Text style={{ padding: 15, color: "#f5cb5c" }}>
          Добавить сотрудника
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardForTasks: {
    backgroundColor: "#333533",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default connect(null)(AddNewEmployer);
