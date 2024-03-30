import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

const Nav = () => {
  return (
    <TouchableOpacity
      style={{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 20,
        right: 15,
        backgroundColor: "#8CE2B4",
        borderRadius: 200,
      }}
    >
      <View>
        <Text style={{ color: "#434343" }}>Hey</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Nav;
