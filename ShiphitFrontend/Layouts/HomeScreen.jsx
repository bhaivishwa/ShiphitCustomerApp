import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

// Custom Button Component
const CustomButton = ({ onPress, icon, label, isActive }) => (
  <TouchableOpacity
    onPress={() => {
      Haptics.selectionAsync();
      onPress();
    }}
    activeOpacity={0.7}
    style={tw`flex-1 items-center justify-center`}
  >
    <View style={tw`items-center`}>
      {React.cloneElement(icon, { color: isActive ? "#914ADA" : "#60606C" })}
      <Text
        style={{
          fontWeight: "700",
          fontSize: 15,
          color: isActive ? "#914ADA" : "#60606C",
          marginTop: 4,
        }}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

// Home Screen
const HomeScreen = ({ navigation }) => {
  const route = useRoute();
  const activeTab = route.name;

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Main Content */}
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-sm`}>Welcome Home</Text>
      </View>
      {/* Bottom Navigation */}
      <View style={tw`flex-row py-4 w-full bg-white border-t border-gray-200`}>
        <CustomButton
          onPress={() => navigation.navigate("Home")}
          icon={<Entypo name="home" size={23} />}
          label="Home"
          isActive={activeTab === "Home"}
        />
        <CustomButton
          onPress={() => navigation.navigate("Courier")}
          icon={<Entypo name="box" size={23} />}
          label="Courier"
          isActive={activeTab === "Courier"}
        />
        <CustomButton
          onPress={() => navigation.navigate("Track")}
          icon={<MaterialIcons name="track-changes" size={23} />}
          label="Track"
          isActive={activeTab === "Track"}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
