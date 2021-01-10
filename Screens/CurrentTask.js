import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function CurrentTask({navigation}) {
    console.log()
    return (
        <View style={styles.container}>
            <View style={{fonSize: 24, backgroundColor: 'red', padding: 5}}>
                <Text>{navigation.getParam('title')}</Text>
            </View>
            <Text>{navigation.getParam('body')}</Text>
            <View>
                <Text>Завершить задачу</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 5
    },
});
