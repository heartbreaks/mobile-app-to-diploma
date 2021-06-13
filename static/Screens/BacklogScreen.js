import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BacklogTasksList from '../components/BacklogTasksList'
import TasksList from "../components/TasksList";

export function BacklogScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <BacklogTasksList  navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20,
        backgroundColor: '#FAFDFF'
    },
});
