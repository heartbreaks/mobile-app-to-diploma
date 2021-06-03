import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function getIndicator(type) {
    switch (type) {
        case 1:
            return (<Text style={{color: '#00acee'}}>Нормально</Text>);
        case 2:
            return ( <Text style={{color: 'orange'}}>Средне</Text> );
        case 3:
            return (  <Text style={{color: 'red'}}>Срочно</Text> );
        default:
            return <Text>Life is pain</Text>;
    }
}

function Task(props) {
    const { currentTask, navigation } = props;
    const appointmentBy = currentTask.appointment_by.length > 13 ? currentTask.appointment_by.slice(0, 11) + '…' : currentTask.appointment_by

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("BacklogCurrentTask", currentTask);
            }}
        >
            <View style={styles.task}>
                <View style={styles.head}>
                    <Text
                        style={
                            (
                                {
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    paddingBottom: 3,
                                    borderBottomColor: "white",
                                    borderBottomWidth: 1.5,
                                    color: "#000",
                                })
                        }
                    >
                        {currentTask.title}
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            color: "#000",
                            padding: 5,
                        }}
                    >
                        {currentTask.body}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 15, marginBottom: 8, justifyContent: "space-between", alignItems: 'center'}}>
                    <Text style={{ padding: 3, color: "#8FD14F", order: 1}}>
                        {new Date(currentTask.date).toLocaleDateString('ru-Ru', {day: 'numeric', month: 'long'})}
                    </Text>
                    <Text style={{order: 0}}>{getIndicator(currentTask.level_primary)}</Text>
                    <View style={{ alignItems: "center", flexDirection: 'row', order: 3}}>
                        <View style={{width: 24, height: 24, borderBottomRightRadius: 20,borderBottomLeftRadius: 20,borderTopRightRadius: 20,borderTopLeftRadius: 20, backgroundColor: 'red', marginRight: 3}}></View>
                        <Text style={{fontWeight: "bold"}}>{appointmentBy}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: '#DDEFFF',
        marginTop: 12,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 12,
        paddingBottom: 0,
        color: "#000",
        margin: 5,
        backgroundColor: "#fff",
    },
    border: {
        borderWidth: 2,
        borderColor: "#DEF0FF",
    },
    head: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: 30,
    },
});

function mapStateToProps(state, ownProps) {
    const currentTask = state.backlog.find(elem => elem.id == ownProps.id);
    return { currentTask };
}

export default connect(mapStateToProps)(Task);
