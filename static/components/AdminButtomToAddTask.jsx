import React from 'react'
import { View, Text, StyleSheet} from "react-native";
import {connect} from 'react-redux'
import { createTaskBacklog } from '../Redux/actions'
import { TouchableOpacity } from "react-native-gesture-handler";

class AdminButtonToAddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddNewBacklogTask')}>
                <View style={styles.buttonAdd}>
                    <Text style={styles.textColor}>+</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonAdd: {
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
    textColor: {
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 34
    }
})

export default connect(null, {createTaskBacklog})(AdminButtonToAddTask)