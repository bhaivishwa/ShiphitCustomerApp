import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-react-native-classnames";

const PackingToggle = () => {
  const [isOn, setIsOn] = useState(true); // Default is ON (Yes)
  const translateX = useRef(new Animated.Value(32)).current; // Set correct initial position

  // Ensure toggle is at the correct initial position
  useEffect(() => {
    translateX.setValue(isOn ? 32 : -5);
  }, []);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    Animated.timing(translateX, {
      toValue: isOn ? -4 : 32, // Toggle movement
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 2,
        marginBottom: 6,
      }}
    >
      {/* <Text style={{ color: "#60606C", fontSize: 21 }}>
        Need box for packing
      </Text> */}
      <Text style={{ color: "#60606C", fontSize: 18, fontWeight: 500 }}>
        Need box for packing
      </Text>

      {/* Custom Toggle Switch */}
      <TouchableOpacity
        onPress={toggleSwitch}
        activeOpacity={0.8}
        style={{
          width: 74,
          height: 34,
          borderRadius: 20,
          backgroundColor: isOn ? "#6246D2" : "#CE4FE3",
          paddingHorizontal: 4,
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Yes / No Text Inside */}
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            position: "absolute",
            left: isOn ? 15 : 42, // Adjust text position dynamically
          }}
        >
          {isOn ? "Yes" : "No"}
        </Text>

        {/* Animated Circle (Toggle Icon) */}
        <Animated.View
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: "white",
            position: "absolute",
            left: 10,
            transform: [{ translateX }],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PackingToggle;
