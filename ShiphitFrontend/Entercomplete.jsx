import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Editprofile() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.Editprofile}>
        <Text style={styles.bold1}>Enter Complete address</Text>
      </View>

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

      {/* Input Section */}
      <Text style={styles.login_text}>House No & Floor*</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="House no & floor"
          keyboardType="phone-text"
          maxLength={30}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <Text style={styles.login_text}>Building & Block No*</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Building & block no"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <Text style={styles.login_text}>Land mark & Area name</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Land mark & Area name"
          keyboardType="phone-text"
          maxLength={30}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Terms & Conditions */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      ></View>
      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <Text style={styles.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    padding: 25,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    gap: 3,
  },

  login_text: {
    fontSize: 17,
    fontWeight: "400",
    color: "#60606C",
    paddingVertical: 13,
    paddingHorizontal: 5,
  },
  login_text1: {
    fontSize: 17,
    fontWeight: "400",
    color: "#60606C",
    paddingVertical: 13,
    paddingHorizontal: 5,
  },
  login_text2: {
    fontSize: 17,
    fontWeight: "400",
    color: "#60606C",
    paddingVertical: 13,
    paddingHorizontal: 5,
  },
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "whitesmoke",
    paddingHorizontal: 10,
    height: 50,
    color: "#60606C",
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "700",
    color: "#60606C",
  },
  button: {
    backgroundColor: "#9960D8",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },

  bold1: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 5,
    color: "#05040B",
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 3,
    paddingVertical: 10,
    paddingHorizontal: 25,
    paddingLeft: 10,
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
    color: "#60606C",
    textAlign: "center",
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 16,
    color: "#60606C",
    textAlign: "center",
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#60606C",
  },
});
