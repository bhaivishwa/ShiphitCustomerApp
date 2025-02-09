import { View, Text, ScrollView, Image, Animated } from "react-native";
import React, { useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CountrySelector from "./CountrySelector";
import Service from "./Service";
import FrequentlyShiped from "./FrequentlyShiped";
import PackingToggle from "./PackingToggle";
import ThingsCanship from "./ThingsCanship";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const CourierScreen = () => {
  const [isOn, setIsOn] = useState(true); // Default: "Yes"
  const translateX = useRef(new Animated.Value(0)).current; // For smooth animation
  console.log(isOn);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    Animated.timing(translateX, {
      toValue: isOn ? 30 : 0, // Moves the circle smoothly
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6F3FC",
      }}
    >
      {/* Header */}
      <View
        style={[
          { backgroundColor: "#6246D2", padding: 20 },
          tw`h-20 flex-row justify-between items-center w-full`,
        ]}
      >
        <View style={tw`flex-row items-center`}>
          <AntDesign name="arrowleft" size={24} color="white" />
          <Text style={tw`text-white text-lg pl-4`}>Courier</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-white text-lg pr-4`}>IN</Text>
          <MaterialIcons name="help-outline" size={24} color="white" />
        </View>
      </View>
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false} // Hides the scrollbar (set to true if you want it visible)
        keyboardShouldPersistTaps="handled"
      >
        <FrequentlyShiped />
        <CountrySelector />
        <Service />
        <PackingToggle />
        <ThingsCanship />
      </ScrollView>
      <View>
        <LinearGradient
          colors={["#6246D2", "#CE4FE3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: "relative",
            alignSelf: "flex-start",
            borderRadius: 2,
            gap: 4,
            width: "100%",
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "white", fontSize: 18, fontWeight: "semibold" }}
          >
            USA | Economy(4 - 6 days)
          </Text>
        </LinearGradient>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/package.png")}
            />
            <Text style={{ fontSize: 21, fontWeight: "600" }}>5 Kg</Text>
            <MaskedView maskElement={<Text style={styles.text}>₹8500</Text>}>
              <LinearGradient
                colors={["#6246D2", "#CE4FE3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // Left to right
              >
                <Text style={[styles.text, { opacity: 0 }]}>₹8500</Text>
              </LinearGradient>
            </MaskedView>
          </View>

          <View>
            <LinearGradient
              colors={["#6246D2", "#CE4FE3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} // Left to right
              style={{
                alignSelf: "flex-start",
                borderRadius: 300,
                width: 85,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "white",
                }}
              >
                Next
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourierScreen;

const styles = {
  text: {
    fontSize: 21,
    fontWeight: "600",
    marginLeft: 10,
    color: "black", // Fallback color
  },
};
