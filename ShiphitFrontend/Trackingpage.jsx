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

export default function Trackingpage() {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF", }}>
      <ScrollView>
        <View style={{ padding: 0 }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              paddingVertical: 30,
              marginBottom: 10,
            }}
          >
            <View style={{ paddingBottom: 15 }}>
              <View style={styles.contents}>
                <View style={styles.btn4}>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate("")}
                  >
                    <Text style={styles.buttonText2}>
                      {" "}
                      Courier
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.btn1}>
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter AWS No"
                  value={text}
                  onChangeText={setText}
                />
              </View>
            </View>
          </View>

          <View style={styles.containertwo}>
            <View style={styles.orderandplaced}>
              <View style={styles.orderplaced}>
                {dataset.map((d) => (
                  <View style={styles.map}>
                    <View>
                      <Text style={styles.category}>{d.title}</Text>
                    </View>
                    {d.subtitles.map((d) => (
                      <>
                        <Text style={styles.text1}>{d}</Text>
                      </>
                    ))}
                  </View>
                ))}
              </View>
              <View style={styles.shippedto}>
                <Text style={styles.shipped}>Shipped To</Text>
                <Text style={styles.address}>
                  2nd floor, Mohan business park, Don bosco school,
                  Saravanampatti, Thudiyalur.
                </Text>
              </View>
              <TouchableOpacity
                style={styles.Repeatorder}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.Repeatbtn}>Repeat Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => setIsContentVisible(!isContentVisible)}
          >
            <View style={styles.containerthree}>
              <View style={styles.pricecontent}>
                <Text style={styles.number}>
                  <Text style={styles.numberpad}>
                    Haldiram's Mithas Sweet Ladoo
                  </Text>
                </Text>
                <View style={styles.price}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={18}
                    color="#05040B"
                    fontWeight="800"
                  />
                  <Text style={styles.pricenumber}>191</Text>
                </View>
              </View>
              <View style={styles.weightcontain}>
                <Text style={styles.weight}>
                  <Text style={styles.kiloweight}></Text> December 11, 5.48 pm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10, alignItems:"center",marginTop:5,}}>
                  <View
                    style={{
                      backgroundColor: "#00B60C",
                      borderRadius: 999,
                      padding: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      marginTop: 25,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-bold"
                      size={12}
                      color="white"
                    />
                  </View>
                  <Text
                    style={{
                      color: "#00B60C",
                      fontSize: 16,
                      fontWeight: 600,
                      marginTop: 25,
                    }}
                  >
                    Delivered
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.Repeatorder}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.Repeatbtn}>Repeat Order</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.orderandplaced}>
                
                <View style={styles.orderplaced}>
                  {dataset.map((d) => (
                    <View style={styles.map}>
                      <View>
                        <Text style={styles.category}>{d.title}</Text>
                      </View>
                      {d.subtitles.map((d) => (
                        <>
                          <Text style={styles.text1}>{d}</Text>
                        </>
                      ))}
                    </View>
                  ))}
                </View>
                <View style={styles.shippedto}>
                  <Text style={styles.shipped}>Shipped To</Text>
                  <Text style={styles.address}>
                    2nd floor, Mohan business park, Don bosco school,
                    Saravanampatti, Thudiyalur.
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.Repeatorder}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.Repeatbtn}>Repeat Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            {isContentVisible && (
              <Text style={styles.cardContent}>
                <View style={styles.orderplaced}>
                  {dataset.map((d) => (
                    <View style={styles.map}>
                      <View>
                        <Text style={styles.category}>{d.title}</Text>
                      </View>
                      {d.subtitles.map((d) => (
                        <>
                          <Text style={styles.text1}>{d}</Text>
                        </>
                      ))}
                    </View>
                  ))}
                </View>
                <View style={styles.shippedto}>
                  <Text style={styles.shipped}>Shipped To</Text>
                  <Text style={styles.address}>
                    2nd floor, Mohan business park, Don bosco school,
                    Saravanampatti, Thudiyalur.
                  </Text>
                  <TouchableOpacity
                  style={styles.Repeatorderone}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.Repeatbtnone}>Repeat Order</Text>
                </TouchableOpacity>
                </View>
              
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardContent:{
   padding:10,
   marginBottom:16,
  },
  orderandplaced: {
    display: "none",
  },
  tick: {
    fontWeight: "500",
    fontSize: 20,
    paddingVertical: 20,
    marginLeft: 20,
    marginTop: 10,
    color: "#00B60C",
  },
  delivery: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingVertical: 20,
  },
  Repeatorder: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    width: "45%",
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#6246D2",
    borderWidth: 1,
    marginTop: 25,
  },
  Repeatorderone: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    width: "45%",
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#6246D2",
    borderWidth: 1,
    marginTop: 25,
    marginLeft:20,
  },
  Repeatbtn: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6246D2",
  },
  Repeatbtnone: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6246D2",
  },
  containertwo: {
    backgroundColor: "white",
    marginTop:-13,
  },
  containerthree: {
    marginTop: 10,
    padding: 30,
    backgroundColor: "white",
  },
  price: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-evenly",
  },
  pricecontent: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  pricenumber: {
    fontSize: 19,
    fontWeight: "500",
    color: "#05040B",
    marginTop: -4,
  },
  number: {
    fontSize: 18,
    fontWeight: "400",
    color: "#05040B",
  },
  weight: {
    fontSize: 16,
    fontWeight: "400",
    color: "#A1A0A5",
    marginTop:-10,
    marginLeft:-3,
  },
  days: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6246D2",
    backgroundColor: "#F6F3FC",
  },
  van: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 8,
    marginTop: 25,
    marginBottom: 15,
    width: "73%",
    backgroundColor: "#F6F3FC",
    justifyContent: "center",
  },
  map: {
    paddingVertical: 12,
    marginTop: 5,
    paddingHorizontal: 30,
    gap: 5,
  },
  shipped: {
    paddingVertical: 5,
    fontWeight: "500",
    fontSize: 18,
    color: "#05040B",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  address: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontWeight: "400",
    fontSize: 17,
    color: "#60606C",
  },
  text1: {
    color: "#60606C",
    fontSize: 17,
  },
  category: {
    color: "#05040B",
    fontSize: 17,
    fontWeight: "500",
  },
  kiloweight: {
    fontWeight: "400",
    color: "#A1A0A5",
    fontSize: "15",
    marginTop:55,
  },
  numberpad: {
    color: "#05040B",
    fontWeight: "500",
    fontSize: "17",
  },
  input: {
    borderWidth: 1,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    padding: 15,
    borderColor: "#F6F3FC",
    borderRadius: 8,
    fontWeight: "500",
  },
  contents: {},
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#9C4BDB",
    marginBottom:10,
    paddingHorizontal:8,
    fontSize: 18,
  },
  btn1: {},
});
