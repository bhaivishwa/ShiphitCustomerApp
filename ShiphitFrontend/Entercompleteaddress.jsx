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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import RNPickerSelect from "react-native-picker-select";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Entercompleteaddress() {
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
  const InputDropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Apple 🍎", value: "apple" },
      { label: "Banana 🍌", value: "banana" },
      { label: "Orange 🍊", value: "orange" },
    ]);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 3 }}>
      <ScrollView>
        <View style={styles.fullcontent}>
          <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.saveaddressas}>Enter Complete address</Text>
              <View style={styles.contents}>
                <View style={styles.btn4}>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate("")}
                  >
                    <Text style={styles.buttonText1}>
                      {" "}
                      Home
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btn11}>
                  <TouchableOpacity
                    style={styles.button4}
                    onPress={() => navigation.navigate("")}
                  >
                    <Text style={styles.buttonText2}>
                      {" "}
                      Native
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btn12}>
                  <TouchableOpacity
                    style={styles.button5}
                    onPress={() => navigation.navigate("")}
                  >
                    <Text style={styles.buttonText3}>
                      {" "}
                      Son
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.pickup}>House No & Floor*</Text>

              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="House No & Floor"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
            </View> </View>

            <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.pickup}>Building and Block No*</Text>

              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Building and block no"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
            </View> </View>

            <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.pickup}>Land mark & Area name*</Text>

              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Land mark & Area name"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
            </View> </View>

                <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("")}
                      >
                        <Text style={styles.buttonText}>Save Address</Text>
                      </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    padding: 10,
    borderColor: "#F6F3FC",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#9960D8",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginRight: 20,
    backgroundColor: "white",
    alignSelf: "center",
    width: "100%",
  },
  buttonText1: {
    width: 70,
    height: 30,
    borderWidth: 1,
    borderColor: "#F6F3FC",
    fontSize: 16,
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 16,
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 16,
  },
  btn1: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  buttonText:{
    color:"white",
  },
  Courierpage: {
    backgroundColor: "#FFFFFF",
    fontSize:16,
    fontWeight:"500",
  },
  fullcontent:{
   paddingHorizontal:10,
  },
 

 




});
