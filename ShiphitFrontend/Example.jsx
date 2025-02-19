import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Example() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const ButtonNavigator = () => {
    // State to track current content index
    const [index, setIndex] = useState(0);
  
    // Content list with different button text & colors
    const content = [
      { text: "Start", color: "#FF5733" },
      { text: "Next Step", color: "#33FF57" },
      { text: "Almost There", color: "#3357FF" },
      { text: "Finish", color: "#FFD700" },
    ];
  
    // Function to handle button press
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length); // Loop through content
    };

  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button, { backgroundColor: content[index].color }]}
      onPress={handleNext}
    >
      <Text style={styles.buttonText}>{content[index].text}</Text>
    </TouchableOpacity>
  </View>
);
};

  ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      },
      button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
});
