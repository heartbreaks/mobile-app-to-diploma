import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

function AddNewTaskScreen(props) {
    return (
        <View>
            <Text>Создать задачу</Text>
        </View>
    );
}

export default connect(null)(AddNewTaskScreen)