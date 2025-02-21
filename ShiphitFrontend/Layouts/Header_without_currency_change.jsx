import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { FlatList } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation(); // Access navigation object
  const [modalVisible, setModalVisible] = useState(false);
  const dataset = [
    {
      image: require(`../assets/flagsFinal/france.png`),
      name: "france",
      currency: "INR ₹",
    },
    {
      image: require(`../assets/flagsFinal/usa.png`),
      name: "USA",
      currency: "USD $",
    },
    {
      image: require(`../assets/flagsFinal/uk.png`),
      name: "UK",
      currency: "GBP £",
    },
    {
      image: require(`../assets/flagsFinal/singapore.png`),
      name: "Singapore",
      currency: "SGD S$",
    },
    {
      image: require(`../assets/flagsFinal/canada.png`),
      name: "Canada",
      currency: "CAD C$",
    },
  ];
  return (
    <View
      style={[
        {
          backgroundColor: "#6246D2",
          height: 105,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          marginBottom: 25,
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
          <Text style={tw`text-white text-lg pl-4`}>Courier</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="help-outline" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;
