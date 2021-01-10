import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

function FinishedTasksScreen(props) {
    return (
        <View>
            <Text>Завершенные задачи</Text>
        </View>
    );
}

export default connect(null)(FinishedTasksScreen)