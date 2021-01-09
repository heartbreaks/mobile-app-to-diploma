import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function CurrentTask({navigation}) {
    console.log()
    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20,
    },
});
