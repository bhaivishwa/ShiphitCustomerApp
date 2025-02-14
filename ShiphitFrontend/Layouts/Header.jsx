import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {
  return (
    <View
      style={[
        {
          backgroundColor: "#6246D2",
          padding: 20,
          height: 80,
          justifyContent: "space-between",
          width: "100%",
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={{ padding: 10 }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "semibold" }}>
          Tracking
        </Text>
      </View>
    </View>
  );
};

export default Header;
