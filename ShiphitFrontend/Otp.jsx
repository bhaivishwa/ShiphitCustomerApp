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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Otp() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6246D2" }}>
      <View style={styles.signuppage}>
        <View style={styles.signup}>
          <Image
            source={require("./assets/signup.png")}
            style={styles.signupimage}
          />
        </View>

    
       <View style={styles.login}>        
        <Text style={styles.bold1}>Verification Code</Text>
         
           <View style={styles.logintextcontent} > 
            <Text style={styles.login_text}>
            Enter the 4 digit code sent to your WhatsApp at  
           <Text style={styles.login_text1}>     +91 9898989898</Text></Text>
           </View>
         
         
         

      

          <Text>
            Did't receive a code? <Text style={styles.login_text2}>Resend</Text>
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Continue Pressed")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signuppage: {
    flex: 1,
    backgroundColor: "#6246D2",
  },
  signup: {
    flex: 0.6, // Take up 60% of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  login: {
    flex: 0.4, // Take up 40% of the screen
    padding: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: "space-between",
  },
  bold1: {
    fontSize: 21,
    fontWeight: "600",
  },
  login_text1: {
    fontSize: 16,
    fontWeight: "500",
    color: "#560C7B",
  },
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "whitesmoke",
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "700",
  },
  text: {
    alignItems: "left",
    display: "flex",
  },
  flex: {
    fontSize: 14,
    fontWeight: "600",
  },
  colortext1: {
    fontWeight: "400",
    color: "#29282C",
    lineHeight: 20, // Correct property
  },
  button: {
    backgroundColor: "#CE4FE3",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  login_text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#560C7B",
  },
  logintextcontent:{
   paddingBottom:80,
  },
});
