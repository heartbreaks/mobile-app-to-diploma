import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StrokeOfDeadline from '../components/StrokeOfDeadline'

export function CurrentTask({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={{ padding: 5}}>
        <Text style={styles.cardHead}>
          {navigation.getParam("title")}
        </Text>
        <View style={{ borderWidth: 2, marginTop: 13, padding: 5, marginBottom: 23, borderColor: "#ECECEC" }}>
          <Text style={{ fontSize: 16, color: "black", textAlign: "left" }}>
            {navigation.getParam("body")}
          </Text>
        </View>
        <StrokeOfDeadline dates={{ createdAt: navigation.getParam('createdAt'), date: navigation.getParam('date')}}/>
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 20}}>Назначение от:</Text>
          <View style={{flex: 0, flexDirection: "row", alignItems: 'center', marginTop: 5}}>
            <View style={styles.cardAppointmentBy}></View>
            <Text style={{fontSize: 20}}>{navigation.getParam('appointment_by')}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.finishTask}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              textAlign: "center",
              padding: 4,
            }}
          >
            Завершить задачу
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFDFF",
  },
  cardHead: {
    fontSize: 26,
    marginTop: 25,
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
  finishTask: {
    backgroundColor: "#12CDD4",
    borderColor: "#12CDD4",
    borderWidth: 2,
    borderRadius: 13,
    padding: 10,
    margin: 5,
    fontSize: 27,
  },
  deadline: {
    height: 10,
    marginTop: 5,
    backgroundColor: '#12CDD4'
  }
});
