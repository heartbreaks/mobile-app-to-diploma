import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";
import {createTaskBacklog} from "../Redux/actions";

function AddNewBacklogTask(props) {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [date, setDate] = React.useState(currentDate());
    const [levelPrimary, setLevelPrimary] = React.useState("");

    const isFilled = title && body && date && levelPrimary != "";
    return (
        <View style={styles.container}>
            <View style={{ maxWidth: "90%" }}>
                <Text style={styles.text}>
                    Заполните поля ниже для создания задачи
                </Text>
                <TextInput
                    onChangeText={title => setTitle(title)}
                    style={styles.login}
                    placeholder="Придумайте заголовок задачи"
                />
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Напишите описание задачи"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        onChangeText={body => setBody(body)}
                        multiline={true}
                    />
                </View>
                <View style={styles.textAreaContainer}>
                    <RNPickerSelect
                        onValueChange={levelPrimary => setLevelPrimary(levelPrimary)}
                        placeholder={"Select level of task"}
                        items={[
                            { label: "Скоро дедлайн", value: 2 },
                            { label: "Нормальный", value: 1 },
                            { label: "Срочно", value: 3 },
                        ]}
                    />
                </View>
                <View style={{ marginBottom: 5 }}>
                    <DatePicker
                        style={{ width: "100%" }}
                        date={date}
                        mode="date"
                        placeholder="Введите срок сдачи задачи"
                        format="YYYY-MM-DD"
                        minDate={date}
                        maxDate="2030-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={date => {
                            setDate(date);
                        }}
                    />
                </View>
                <TouchableOpacity onPress={async () => {
                    let data = { title, body, levelPrimary, date, appointment_by: props.userId};
                    return isFilled ? await props.createTaskBacklog(data) : (
                        Alert.alert(
                            "Что то пошло не так",
                            "К сожалению что то пошло не так, проверьте пожалуйста введеные поля и попробуйте снова",
                            [
                                {
                                    text: "Ok",
                                    onPress: () => {
                                        console.log("Ошибка, вне все поля заполнены");
                                    },
                                },
                            ]
                        )
                    )
                }}>
                    <View style={styles.boxShadow}>
                        <Text style={{ textAlign: "center", color: 'white' }}>Создать задачу</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textAreaContainer: {
        borderColor: "#2D9BF0",
        borderWidth: 1,
        padding: 5,
        marginBottom: 5,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
    },
    login: {
        borderBottomColor: "#2D9BF0",
        color: "#2D9BF0",
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 5,
        paddingBottom: 3,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        backgroundColor: "#2D9BF0",
        padding: 10,
    },
    text: {
        color: '#808080',
        fontSize: 18,
        textAlign: 'center'
    }
});

function mapStateToProp(state) {
    return {userId: state.userId}
}


export default connect(mapStateToProp, {createTaskBacklog})(AddNewBacklogTask);

function currentDate() {
    let dateNow = new Date().toLocaleTimeString("ru-ru", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    let dateNowArr = dateNow.split(".");
    dateNow = `${dateNowArr[2]}-${dateNowArr[1]}-${dateNowArr[0]}`;
    return dateNow;
}