import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
import salesrates from "../Dataset/salesrates";
import axios from "axios";

const CourierScreen = () => {
  const [isOn, setIsOn] = useState(true); // Default: "Yes"
  const [to_Country, set_ToCountry] = useState("UK");
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
    if (service == "") {
      return;
    }
    sendSalesRatesRequest(to_Country, service, "4 Kg");
  }, [to_Country, service, weight_]);

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
  const navigation = useNavigation(); // Access navigation object
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = Dimensions.get("window");
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

  console.log("salesdata", Object.keys(salesdata).length === 0, salesdata); // true (object is empty)

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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={{ padding: 10 }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg pl-4`}>Courier</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("../assets/flagsFinal/france.png")} />
              <Text style={tw`text-white text-lg`}>IN</Text>
              <AntDesign name="down" size={14} color="white" />
            </View>
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.5)", // Dim background effect
              }}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}
            >
              <View
                style={{
                  position: "absolute",
                  top: 50,
                  right: 20,
                  backgroundColor: "white",
                  padding: 16,
                  borderRadius: 10,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  elevation: 5, // Shadow for Android
                }}
              >
                <FlatList
                  data={dataset}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginVertical: 13,
                          width: 300,
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Flag Image */}
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={item.image}
                            style={{
                              width: 25,
                              height: 25,
                              objectFit: "contain",
                              marginRight: 10,
                            }}
                          />
                          <Text style={{ fontSize: 18, fontWeight: "regular" }}>
                            {item.name}
                          </Text>
                        </View>
                        {/* Country Name & Currency */}
                        <View>
                          <Text style={{ fontSize: 16, color: "#000000" }}>
                            {item.currency}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
          <MaterialIcons name="help-outline" size={24} color="white" />
        </View>
      </View>
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
      <View
        style={
          Object.keys(salesdata).length === 0
            ? { display: "none" }
            : { display: "flex" }
        }
      >
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
            {salesdata?.Country_to} | {salesdata?.Service} (
            {salesdata.daysToDelivery})
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
            <Entypo name="box" size={24} color="#05040B" />
            <Text style={{ fontSize: 21, fontWeight: "600" }}>
              {salesdata.weight}
            </Text>
            <MaskedView
              maskElement={<Text style={styles.text}>{salesdata?.price}</Text>}
            >
              <LinearGradient
                colors={["#6246D2", "#CE4FE3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // Left to right
              >
                <Text style={[styles.text, { opacity: 0 }]}>
                  {salesdata?.price}
                </Text>
              </LinearGradient>
            </MaskedView>
          </View>
          <TouchableOpacity>
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
          </TouchableOpacity>
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
