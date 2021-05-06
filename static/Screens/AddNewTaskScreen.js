import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addNewTask } from "../Redux/actions";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";
import { bindActionCreators } from "redux";

function AddNewTaskScreen(props) {
  const { employers } = props;

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [executor, setExecutor] = React.useState("");
  const [date, setDate] = React.useState(currentDate());
  const [levelPrimary, setLevelPrimary] = React.useState("");

  const isFilled = title && body && executor && date && levelPrimary != "";

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

  return (
    <View style={styles.container}>
      <View style={{ maxWidth: "90%" }}>
        <Text>Заполните поля ниже для создания задачи</Text>
        <TextInput
          onChangeText={title => setTitle(title)}
          style={styles.login}
          placeholder="Введите название задачи"
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
            onValueChange={employer => setExecutor(employer)}
            placeholder={"Select employer"}
            items={employers}
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
        <TouchableOpacity
          onPress={() => {
            if (!isFilled) {
              return Alert.alert(
                "Что то пошло не так",
                "К сожалению что то пошло не так, проверьте пожалуйста введеные поля и попробуйте снова",
                [
                  {
                    text: "Ok",
                    onPress: () => {
                      console.log("Errno");
                    },
                  },
                ]
              );
            }
            let data = { title, body, executor, levelPrimary, date, appointment_by: props.currentUserId, ended: 0 };

            props.addNewTask(data).then(req => {
              if (req.code === 200) {
                Alert.alert("Задача добавлена", "Вы можете закрыть это окно", [
                  {
                    text: "Ok",
                    onPress: () => {
                      console.log("Errno");
                    },
                  },
                ]);
              }
            });
          }}
        >
          <View style={styles.boxShadow}>
            <Text style={{ textAlign: "center" }}>Создать задачу</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    borderBottomColor: "#000",
    color: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 3,
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
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
    backgroundColor: "#f5cb5c",
    padding: 10,
  },
});

function mapStateToProps(state) {
  return {
    employers: state.humans,
    currentUserId: state.userId
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewTask }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNewTaskScreen);
