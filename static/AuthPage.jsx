import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { toLogin } from "./Redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {ActivityIndicator, Alert} from "react-native";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secureTextEntry: true,
      iconEye: "eye",
      login: "",
      password: "",
      fetching: false,
      userInfo: {
        userToken: "",
        userId: "",
        userRole: "",
      },
    };

    this.onIconPress = this.onIconPress.bind(this);
  }

  onIconPress() {
    const { secureTextEntry } = this.state;
    let iconName = secureTextEntry ? "eye-off" : "eye";
    this.setState({ secureTextEntry: !secureTextEntry, iconEye: iconName });
  }

  render() {
    const { login, password } = this.state;
    const isCorrect = login && password != "" ? false : true;
    return (
      <View style={styles.container}>
        <View>
          <Text>Введите ваш логин и пароль для входа в систему</Text>
          <TextInput
            style={styles.login}
            placeholder="Введите имя пользователя"
            onChangeText={text => {
              this.setState({ login: text });
            }}
          />
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: "#000",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <TextInput
              style={styles.password}
              placeholder="Введите пароль"
              textContentType="password"
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
            <Icon
              onPress={this.onIconPress}
              name={this.state.iconEye}
              size={20}
            />
          </View>
          <ActivityIndicator animating={this.state.fetching} style={styles.loader} size='large'/>
          <Button
            {...{ disabled: isCorrect }}
            onPress={async () => {
              this.setState({fetching: true})
              await this.props.toLogin(login, password)
              this.setState({fetching: false})
            }}
            style={{ marginTop: "20px", width: "5%" }}
            title="Войти"
          />
          <StatusBar style="black" />
        </View>
      </View>
    );
  }
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
    paddingBottom: 3,
  },
  password: {
    flex: 1,
    color: "black",
    paddingBottom: 3,
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toLogin,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  const {fetching} = state
  return {fetching}
}
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
