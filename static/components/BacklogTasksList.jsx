import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getBacklog } from "../Redux/actions";
import {ActivityIndicator, Alert} from "react-native";
import TaskBacklog from "./TaskBacklog";
import AdminButtonToAddTask from "./AdminButtomToAddTask";

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
        const { backlog, navigation, isAdmin } = this.props;
        return (
            <ScrollView style={styles.tasksList}>
                <ActivityIndicator animating={this.state.fetching} size='large'/>
                {backlog == null  ? <Text>Новых задач нет</Text> :
                    backlog.map(task => {
                        return <TaskBacklog key={task.id}  navigation={navigation} id={task.id}/>
                    })
                }
                {Boolean(isAdmin) ? <AdminButtonToAddTask navigation={navigation}/> : <Text style={styles.textStyle}>Тут вы можете взять
                новую задачу в работу</Text>}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tasksList: {
        flex: 1,
        flexDirection: "column",
    },
    textStyle: {
        color: '#808080',
        fontSize: 24,
        textAlign: 'center'
    }
});

function mapStateToProps(state) {
    const { backlog, isAdmin } = state;
    return { backlog, isAdmin };
}

export default connect(mapStateToProps, {getBacklog})(BacklogTasksList);
