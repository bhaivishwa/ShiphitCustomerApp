import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CountrySelector from "./CountrySelector";
import Service from "./Service";
import FrequentlyShiped from "./FrequentlyShiped";
import PackingToggle from "./PackingToggle";
import ThingsCanship from "./ThingsCanship";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Entypo from "@expo/vector-icons/Entypo";
import axios from "axios";
import Headers from "./Header";
import SalesCard from "./SalesCard";
const CourierScreen = () => {
  const [isOn, setIsOn] = useState(true); // Default: "Yes"
  const [to_Country, set_ToCountry] = useState("Select");
  const [service, setservice] = useState("");
  const [Weighttype, setWeighttype] = useState("Kg");
  const [weight_, setweight_] = useState("0");
  const [salesdata, setsalesdate] = useState({});

  const sendSalesRatesRequest = async (to_Country, service, weight_) => {
    if (!to_Country || !service || !weight_) {
      console.warn("Skipping request: Missing required parameters.");
      return;
    }

    try {
      const response = await axios.post(
        "https://shipmentbackend-ad96a7a505ec.herokuapp.com/salesrates",
        {
          Country_to: to_Country,
          Service: service,
          Weight: weight_,
        }
      );
      setsalesdate(response.data);
      console.log("POST Request Success:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending POST request:", error);
      return null;
    }
  };

  useEffect(() => {
    if (service == "" || weight_ == "0") {
      return;
    }
    sendSalesRatesRequest(to_Country, service, weight_);
  }, [to_Country, service, weight_]);

  const translateX = useRef(new Animated.Value(0)).current; // For smooth animation
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
      <Headers />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false} // Hides the scrollbar (set to true if you want it visible)
        keyboardShouldPersistTaps="handled"
      >
        <FrequentlyShiped />
        <CountrySelector toCountry={to_Country} setToCountry={set_ToCountry} />
        <Service
          activeTab={service}
          setactiveTab={setservice}
          Weight_type={Weighttype}
          setWeight_type={setWeighttype}
          weight={weight_}
          setweight={setweight_}
        />
        <PackingToggle />
        <ThingsCanship />
      </ScrollView>
      <SalesCard salesdata={salesdata} />
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
