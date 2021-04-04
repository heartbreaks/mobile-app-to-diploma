import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class StrokeOfDeadline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0
        }
    }

    componentDidMount() {
        const {createdAt, date} = this.props.dates;
        const start = createdAt.split('-')
        const end = date.split('-')
        const a = Math.round(100 - ( new Date(end[0], end[1] - 1, end[2]) - new Date(start[0], start[1] - 1, start[2])) / new Date())
        console.log(a, end);
        this.setState({percent: a})
    }

    render() {
        console.log(this.state.percent, 'onrend')
        return (
            <View>
                <Text style={styles.headStroke}>Дедлайн</Text>
                <Text style={styles.headStroke}>{this.state.percent}%</Text>
                <Text>{new Date(this.props.dates.date).toLocaleDateString('ru-Ru', {month: 'long', day: 'numeric', year: 'numeric'})}</Text>
                <View style={styles.borderStroke}>
                    <View style={{height: 9, width: `${this.state.percent}%`, backgroundColor: '#2D9BF0'}}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texts: {
        flex: 0,
    },
    headStroke: {
        fontSize: 16,
    },
    borderStroke: {
        borderWidth: 1,
        borderColor: '#ECECEC'
    },
    lineStroke: {
        height: 9,
        width: `100%`,
        backgroundColor: '#2D9BF0'
    }
})

export default connect(null)(StrokeOfDeadline)