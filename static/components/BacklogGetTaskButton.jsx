import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {getTaskBacklog} from "../Redux/actions";

function BacklogGetTaskButton(props) {
    return (
        <TouchableOpacity onPress={() => {
            props.getTaskBacklog(props.taskId, props.userId)
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
                    Взять задачу в работу
                </Text>
            </View>
        </TouchableOpacity>
    );
}

function mapStateToProps(state) {
    return {userId: state.userId}
}

export default connect(mapStateToProps, {getTaskBacklog})(BacklogGetTaskButton)

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