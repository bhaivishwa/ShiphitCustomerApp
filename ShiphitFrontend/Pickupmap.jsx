import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  handleOtpSubmit,
  pickerSelectStyles,
  selectedValue,
  ScrollView,
  toggleContent,
  width,
  height,
  isVisible,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import RNPickerSelect from "react-native-picker-select";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { style } from "twrnc";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import dataset from "./utilities/Trackingpage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Progress from "react-native-progress";
import Feather from "@expo/vector-icons/Feather";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
export default function Pickupmap() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const [
    phone,
    setPhone,
    selectedvalue,
    setSelectedvalue,
    text,
    setText,
    isOn,
    setIsOn,
  ] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />
      <View>
        <TouchableOpacity>
          <Text style={styles.buttonText2}>Pick up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("./assets/Musicmap.png")}
          style={styles.signupimage}
        />
      </View>

      <View style={styles.containertwo}>
        <View style={{ backgroundColor: "White", padding: 20, gap: 15 }}>
          <Text
            style={{
              color: "#60606C",
              fontWeight: "400",
              fontSize: 18,
            }}
          >
            ARRIVING IN
          </Text>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                color: "#05040B",
                fontWeight: "600",
                fontSize: 18.5,
              }}
            >
              10 mins
            </Text>
            <Text>progress </Text>
          </View>
        </View>
        <View style={styles.phone}>
          <View
            style={{
              paddingVertical: 13,
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image source={require("./assets/Framee.png")} />
            <Text style={styles.txt}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  alignItems: "center",
                }}
              >
                Hari{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: "16",
                  alignItems: "center",
                  color: "#60606C",
                }}
              >
                is on the way to to pick up your Courier.
              </Text>
            </Text>
          </View>

          <View style={{ paddingVertical: 13 }}>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => navigation.navigate("")}
            >
              <FontAwesome6 name="phone-volume" size={24} color="#B14DDF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containertwo: {
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "pink",
    backgroundColor: "#FFFFFF",
  },
  icons: {
    paddingVertical: 15,
    width: 55,
    height: 55,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: 8,
  },
  txt: {
    color: "#05040B",
    width: "70%",
  },
  phone: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F6F3FC",
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#9C4BDB",
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontSize: 18,
  },
  signupimage: {
    objectFit: "cover",
    width: "100%",
    flex: 1,
    backgroundColor: "red",
  },
});
