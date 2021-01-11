import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

function AddNewEmployerScreen(props) {
  return (
    <View>
      <Text>Добавить сотрудника</Text>
    </View>
  );
}

export default connect(null)(AddNewEmployerScreen);
