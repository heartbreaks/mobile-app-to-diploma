import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {endTask} from "../Redux/actions";

function CurrentTaskButton(props) {
    return (
        <TouchableOpacity onPress={() => {
            props.endTask(props.taskId, 1)
        }}>
            <View style={styles.finishTask}>
                <Text
                    style={{
                        fontSize: 16,
                        color: "black",
                        textAlign: "center",
                        padding: 4,
                    }}
                >
                    Завершить задачу
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default connect(null, {endTask})(CurrentTaskButton)

const styles = StyleSheet.create({
    finishTask: {
        backgroundColor: "#12CDD4",
        borderColor: "#12CDD4",
        borderWidth: 2,
        borderRadius: 13,
        padding: 10,
        margin: 5,
        fontSize: 27,
    },
})