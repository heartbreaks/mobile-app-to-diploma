import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";

function AddNewTaskScreen(props) {
  const { employers } = props;
  console.log(employers);

  return (
    <View style={styles.container}>
      <View>
        <Text>Заполните поля ниже для создания задачи</Text>
        <TextInput style={styles.login} placeholder="Введите название задачи" />
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Напишите описание задачи"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={styles.textAreaContainer}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            placeholder={"Select employer"}
            items={employers}
          />
        </View>
        <View style={styles.textAreaContainer}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            placeholder={"Select level of task"}
            items={[
              {label: 'Скоро дедлайн', value: 2},
              {label: 'Нормальный', value: 1},
              {label: 'Срочно', value: 3},
            ]}
          />
        </View>
        <Text>Создать задачу</Text>
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
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 3,
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    maxWidth: "90%",
    marginBottom: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
});

function mapStateToProps(state) {
  return {
    employers: state.humans,
  };
}

export default connect(mapStateToProps)(AddNewTaskScreen);
