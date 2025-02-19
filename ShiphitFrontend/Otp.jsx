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
import { useRoute } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
export default function Otp() {
  const navigation = useNavigation();
  const route = useRoute();
  const [otpValue, setotpValue] = useState("");
  const { name, countryCode, phonenumber, service } = route.params || {}; // Get the phone number

  const verifyOTP = async (phonenumber, otp) => {
    console.log(`+${countryCode}${phonenumber}`);
    try {
      const response = await axios.post(
        "https://shipmentbackend-ad96a7a505ec.herokuapp.com/verifyOTP",
        { phoneNumber: `+${countryCode}${phonenumber}`, otp: parseInt(otp) }
      );
      return response.data; // Expecting { success: true/false }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "OTP verification failed"
      );
    }
  };

  async function addUserToDB(name, countryCode, phonenumber) {
    try {
      const response = await axios.post(
        "https://shipmentbackend-ad96a7a505ec.herokuapp.com/addUser",
        {
          name: name,
          countryCode: `+${countryCode}`,
          phone: String(phonenumber),
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      // throw new Error(error.response?.data?.message || "Failed to add user");
    }
  }

  async function resend() {
    console.log("resend function trigred!");
    await axios
      .post("https://shipmentbackend-ad96a7a505ec.herokuapp.com/sendOTP", {
        name: "Nithish",
        phoneNumber: phonenumber,
      })
      .then((d) => {
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleSubmit = async () => {
    if (service == "signUpOtp") {
      try {
        const otpVerificationResult = await verifyOTP(phonenumber, otpValue);
        if (!otpVerificationResult.success) {
          console.error("OTP verification failed!");
          return;
        }
        const userResponse = await addUserToDB(name, countryCode, phonenumber); // Replace "Nithish" with dynamic name
        console.log("User successfully added:", userResponse);
        navigation.navigate("Home");
      } catch (error) {
        console.error("Error:", error.message);
      }
      return;
    }

    if (service == "loginOtp") {
      console.log("Login otp");
      const otpVerificationResult = await verifyOTP(phonenumber, otpValue);
      if (!otpVerificationResult.success) {
        console.error("OTP verification failed!");
        return;
      }
      navigation.navigate("Home");
      return;
    }
  };

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
          <View style={styles.logintextcontent}>
            <View>
              <Text style={{ color: "#666666", fontSize: 17, marginBottom: 7 }}>
                Enter the 4 digit code sent to your WhatsApp at
              </Text>
              <Text style={styles.login_text1}>{phonenumber}</Text>
            </View>
            <OtpInput
              numberOfDigits={4}
              focusColor="#6246D2"
              autoFocus={false}
              hideStick={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              focusStickBlinkingDuration={500}
              onTextChange={(text) => setotpValue(text)}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: styles.container_otp,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                placeholderTextStyle: styles.placeholderText,
              }}
            />
          </View>
          <Text
            style={{
              color: "#666666",
              fontSize: 18,
            }}
          >
            Did't receive a code?{" "}
            <TouchableOpacity onPress={() => resend()}>
              <Text style={styles.login_text2}>Resend</Text>
            </TouchableOpacity>
          </Text>
          <LinearGradient
            colors={["#6246D2", "#CE4FE3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              borderRadius: 8,
              gap: 4,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: 55,
                paddingHorizontal: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleSubmit} // ✅ Form submission with validation
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logintextcontent: {
    gap: 15,
  },
  container_otp: {
    justifyContent: "flex-start",
    gap: 20,
  },
  pinCodeContainer: {
    borderBottomWidth: 1.5,
    borderColor: "#6246D2",
    width: 58,
    height: 58,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pinCodeText: {
    fontSize: 20,
    color: "#05040B",
    textAlign: "center",
  },
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
    fontSize: 17,
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
    fontSize: 18,
    fontWeight: "500",
    color: "#560C7B",
  },
});
