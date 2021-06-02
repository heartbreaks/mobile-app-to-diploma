import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getBacklog } from "../Redux/actions";
import {ActivityIndicator, Alert} from "react-native";
import Task from "./Task";

class BacklogTasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
        }
    }

    componentDidMount() {
        const onInitScreen = () => {
            this.setState({fetching: true})
            this.props.getBacklog();
            this.setState({fetching: false})
        };
        onInitScreen();
        setTimeout(onInitScreen, 300000);
    }

    render() {
        const { backlog, navigation } = this.props;
        console.log(this.state.fetching)
        return (
            <ScrollView style={styles.tasksList}>
                <ActivityIndicator animating={this.state.fetching} size='large'/>
                {backlog == null  ? <Text>У вас нет задач</Text> :
                    backlog.map(task => {
                        return <Text>{task.title}</Text>;
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tasksList: {
        flex: 1,
        flexDirection: "column",
    },
});

function mapStateToProps(state) {
    const { backlog } = state;
    return { backlog };
}

export default connect(mapStateToProps, {getBacklog})(BacklogTasksList);
