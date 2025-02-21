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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF",  }}>
      <ScrollView style={{padding:20,}}>


        
        <View style={{}}>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal:20,
              paddingVertical:20,
            }}
          >
                <View style={styles.btn4}>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate("")}
                  >
                    <Text style={styles.buttonText2}>
                      {" "}
                      Pick up
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
        <View>
        <Image source={require("./assets/Musicmap.png")} style={styles.signupimage} />
        </View>
        

     


         
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#9C4BDB",
    marginBottom: 10,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  signupimage:{
  },



});
