import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SalesCard = ({ salesdata }) => {
  const translateY = useSharedValue(100); // Start off-screen
  const opacity = useSharedValue(0); // Start invisible
  useEffect(() => {
    if (Object.keys(salesdata).length !== 0) {
      setTimeout(() => {
        translateY.value = withTiming(0, { duration: 300 }); // 500ms animation
        opacity.value = withTiming(1, { duration: 300 });
      }, 0); // Small delay to make it smoother
    } else {
      translateY.value = withTiming(100, { duration: 300 });
      opacity.value = withTiming(0, { duration: 300 });
    }
  }, [salesdata]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  if (Object.keys(salesdata).length === 0) {
    return null; // Hide when no data
  }

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
        },
      ]}
    >
      <LinearGradient
        colors={["#6246D2", "#CE4FE3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          alignSelf: "flex-start",
          borderRadius: 2,
          width: "100%",
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
          {salesdata?.Country_to} | {salesdata?.Service} (
          {salesdata?.daysToDelivery})
        </Text>
      </LinearGradient>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Entypo name="box" size={24} color="#05040B" />
          <Text style={{ fontSize: 21, fontWeight: "600" }}>
            {salesdata.weight} Kg
          </Text>

          <MaskedView
            maskElement={
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {salesdata?.price}
              </Text>
            }
          >
            <LinearGradient
              colors={["#6246D2", "#CE4FE3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", opacity: 0 }}>
                {salesdata?.price}
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={["#6246D2", "#CE4FE3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 300,
              width: 85,
              height: 45,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
              Next
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default SalesCard;
