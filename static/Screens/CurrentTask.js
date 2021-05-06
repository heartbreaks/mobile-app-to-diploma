import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StrokeOfDeadline from '../components/StrokeOfDeadline'
import CurrentTaskButton from "../components/CurrentTaskButton";

export function CurrentTask({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={{ padding: 5}}>
        <Text style={styles.cardHead}>
          {navigation.getParam("title")}
        </Text>
        <View style={{ borderWidth: 2, marginTop: 13, padding: 5, marginBottom: 23, borderColor: "#ECECEC" }}>
          <Text style={{ fontSize: 16, color: "black", textAlign: "left", fontWeight: '300' }}>
            {navigation.getParam("body")}
          </Text>
        </View>
        <StrokeOfDeadline dates={{ createdAt: navigation.getParam('createdAt'), date: navigation.getParam('date')}}/>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 20, fontWeight: '300' }}>Назначение от:</Text>
          <View style={{flex: 0, flexDirection: "row", alignItems: 'center', marginTop: 5}}>
            <View style={styles.cardAppointmentBy}></View>
            <Text style={{fontSize: 20, fontWeight: '200' }}>{navigation.getParam('appointment_by')}</Text>
          </View>
        </View>
      </View>
      <CurrentTaskButton taskId={navigation.getParam('id')} ended={navigation.getParam('ended')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFDFF",
    justifyContent: 'space-between'
  },
  cardHead: {
    fontSize: 26,
    marginTop: 25,
    fontWeight: '200'
  },
  cardAppointmentBy: {
    backgroundColor: "#12CDD4",
    width: 40,
    height: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 5,
  },

  deadline: {
    height: 10,
    marginTop: 5,
    backgroundColor: '#12CDD4'
  }
});
