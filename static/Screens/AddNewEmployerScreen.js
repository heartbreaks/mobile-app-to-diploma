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
import { bindActionCreators } from "redux";
import { createNewEmployer } from "../Redux/actions";

function AddNewEmployerScreen(props) {
  const [login, setLogin] = React.useState("");
  const [name, setName] = React.useState("");
  const [role, setUserRole] = React.useState(3);
  const [password, setPassword] = React.useState("");
  const [position, setPosition] = React.useState("");

  const isFilled = login && name && role && password && position != "";
  return (
    <View style={styles.container}>
      <View style={{ maxWidth: "90%" }}>
        <Text style={{ marginBottom: 5 }}>
          Заполните поля ниже для создания задачи
        </Text>
        <TextInput
          onChangeText={login => setLogin(login)}
          style={styles.login}
          placeholder="Придумайте логин сотрудника"
        />
        <TextInput
          onChangeText={name => setName(name)}
          style={styles.login}
          placeholder="Введите ФИО сотрудника"
        />
        <TextInput
          style={styles.login}
          onChangeText={password => setPassword(password)}
          textContentType="password"
          secureTextEntry={true}
          placeholder="Введите пароль сотрудника"
        />
        <RNPickerSelect
          onValueChange={role => setUserRole(role)}
          style={{ marginTop: 20 }}
          placeholder="Выберите роль сотрудника"
          value={role}
          items={[
            { label: "Администратор", value: 2 },
            { label: "Менеджер", value: 1 },
            { label: "Сотрудник", value: 3 },
          ]}
        />
        <TextInput
          onChangeText={position => setPosition(position)}
          style={styles.login}
          placeholder="Введите должность сотрудника"
        />
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
            const data = {
              login,
              name,
              password,
              position,
              role,
            };

            if (isFilled) {
              props.createNewEmployer(data).then(req => {
                if (req.code === 201) {
                  Alert.alert(
                    "Сотрудник добавлен",
                    "Вы можете закрыть это окно",
                    [
                      {
                        text: "Ok",
                        onPress: () => {
                          console.log("Added");
                        },
                      },
                    ]
                  );
                }
              }).catch(err => {
                Alert.alert(
                  `Ошибка`,
                  "Вероятно, данный сотрудник уже есть в базе",
                  [
                    {
                      text: "Ok",
                      onPress: () => {
                        console.log("Errno");
                      },
                    },
                  ]
                );
              });
            }
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
    justifyContent: "center",
    alignItems: "center",
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
  login: {
    borderBottomColor: "#000",
    color: "black",
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
    backgroundColor: "#f5cb5c",
    padding: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createNewEmployer,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(AddNewEmployerScreen);
