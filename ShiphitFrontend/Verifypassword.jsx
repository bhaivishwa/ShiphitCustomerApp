import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
import Entypo from "@expo/vector-icons/Entypo";

export default function Verifypassword() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, ""); // Allow only numbers
    setPhone(numericValue);
  };

  const handleGetOtp = () => {
    console.log("GET OTP Pressed");
    // Navigate to OTP screen (update with actual screen name)
    navigation.navigate("OtpScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Entypo name="mobile" size={150} color="#B84DE0" />
      </View>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>We will send you a One Time Password</Text>
      <Text style={styles.subtitle}>on your Phone number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phone}
        onChangeText={handleChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
        <Text style={styles.buttonText}>GET OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    paddingVertical: 20,
    marginTop: 20,
    color: "#B84DE0",
    fontSize: 20,
    fontWeight: "500",
  },
  iconContainer: {
    alignSelf: "center",
    paddingVertical: "10%",
  },
  title: {
    alignSelf: "center",
    fontSize: 23,
    fontWeight: "500",
  },
  subtitle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    width: "90%",
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#AA4CDE",
    borderWidth: 1,
    borderColor: "#CCA5ED",
    padding: 15,
    borderRadius: 50,
    marginTop: 20,  
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
