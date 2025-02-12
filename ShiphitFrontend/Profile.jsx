import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.Profilepage}>
          <Text style={styles.Profilefont}> Hey there!</Text>
          <Text style={styles.fontone}>Edit</Text>
        </View>
        <View style={styles.Phonenumber}>
          <Text style={styles.Phone}>9889889889</Text>
        </View>

        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => navigation.navigate("")}
        >
          <View style={styles.shipmentone}>
            <Ionicons name="bag-handle-outline" size={24} color="#60606C" />
            <Text style={styles.buttonText}>My Shipments</Text>
          </View>
          <AntDesign name="right" size={24} color="#60606C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => navigation.navigate("")}
        >
          <View style={styles.shipmentone}>
            <Ionicons name="bag-handle-outline" size={24} color="#60606C" />
            <Text style={styles.buttonText}>My Addresses</Text>
          </View>
          <AntDesign name="right" size={24} color="#60606C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => navigation.navigate("")}
        >
          <View style={styles.shipmentone}>
            <Ionicons name="bag-handle-outline" size={24} color="#60606C" />
            <Text style={styles.buttonText}>Notifications</Text>
          </View>
          <AntDesign name="right" size={24} color="#60606C" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => navigation.navigate("")}
        >
          <View style={styles.shipmentone}>
            <Ionicons name="bag-handle-outline" size={24} color="#60606C" />
            <Text style={styles.buttonText}>About us</Text>
          </View>
          <AntDesign name="right" size={24} color="#60606C" />
        </TouchableOpacity>

       
       
        <View style={styles.logout}>
        <TouchableOpacity
          style={styles.logoutbtnone}
          onPress={() => navigation.navigate("")}
        >
          <View style={styles.Logoutt}>
          <Image source={require("./assets/exit.png")} style={styles.wrong} />
            <Text style={styles.logouttxt}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
   
        <View>
          <Text style={styles.appversion}>App version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Restricted: {
    flex: 1,
  },
  Profilepage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Profilefont: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 15,
    paddingVertical: 13,
    color: "#60606C",
  },
  fontone: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 15,
    paddingVertical: 13,
    color: "#6246D2",
  },
  Phone: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 18,
    paddingVertical: 3,
    color: "#05040B",
  },
  Myshipments: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 22,
    paddingVertical: 20,
    color: "#05040B",
  },
  shipmentstxt: {
    marginRight: 30,
    fontSize: 18,
    color: "#60606C",
    letterSpacing: 2,
    paddingRight: 30,
    position: "relative",
    right: 30,
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: "center",
    height:"53%",
  },
  appversion: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: "center",
    color: "#A1A0A5",
    height:140,
  },
  buttonText: {
    color:"#60606C",
    paddingRight: 30,
    marginRight: 30,
    fontSize: 18,
    fontWeight: "500",
  },
  logoutbtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  shipmentone:{
    display:"flex",
    flexDirection:"row",
    gap:18,
  },
  Logoutt:{
    display:"flex",
    flexDirection:"row",
  },
  logouttxt:{
    color:"#E34F65",
  },

});
