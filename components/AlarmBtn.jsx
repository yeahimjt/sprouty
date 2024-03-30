import { StyleSheet, Text, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const AlarmBtn = () => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigator.navigate("alarms")}
      style={[styles.btnContainer]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text]}>Alarm Ringing in 4 hrs 20 mins</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 32,
    backgroundColor: "#15BA5A",
    borderCurve: 10,
    borderRadius: 10,
    width: "100%",
    height: 117,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default AlarmBtn;
