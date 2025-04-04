import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { FlatList } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation(); // Access navigation object
 
  return (
    <View
      style={[
        {
          backgroundColor: "#6246D2",
          height:65,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
          paddingHorizontal:8,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center",
          marginBottom: 18,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{color:"#FFFFFF", fontWeight:"500", fontSize:17, paddingHorizontal:15,}}>Tracking</Text>
        </View>
       
      </View>
    </View>
  );
};

export default Header;
