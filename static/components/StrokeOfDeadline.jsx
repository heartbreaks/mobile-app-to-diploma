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
        const start = new Date(createdAt)
        const end = new Date(date)
        const today = new Date()

        const percent =  Math.round(100 - (((end - start) * 100000) / today))
        this.setState({percent: percent < 0 ? 0 : percent})
    }

    render() {
        return (
            <View>
                <Text style={styles.headStroke}>Дедлайн: {new Date(this.props.dates.date).toLocaleDateString('ru-Ru', {month: 'long', day: 'numeric', year: 'numeric'})}</Text>
                <View>
                    <View style={{height: 2, width: `${this.state.percent}%`, backgroundColor: '#2D9BF0'}}></View>
                    <Text style={{...styles.headStroke, textAlign: 'right'}}>{this.state.percent}%</Text>
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
        fontWeight: '300',
        marginBottom: '2%',
    },
    borderStroke: {
        borderWidth: 1,
        borderColor: '#ECECEC'
    },
    lineStroke: {
        height: 3,
        width: `100%`,
        backgroundColor: '#2D9BF0'
    }
})

export default connect(null)(StrokeOfDeadline)