import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

function FinishedTasks(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("FinishedTasks");
      }}
    >
      <View style={styles.card}>
        <Text style={{textAlign: 'center', padding: 15, color: "white", position: 'absolute', top: '30%' }}>
          Завершенные задачи
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

export default connect(null)(FinishedTasks);
