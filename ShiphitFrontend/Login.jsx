import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6246D2" }}>
      <View style={styles.signuppage}>
        <View style={styles.signup}>
          <Image source={require("./assets/signup.png")} style={styles.signupimage} />
        </View>
        {/* Login Section */}
        <View style={styles.login}>
          <Text style={styles.bold1}>All your favorites from your native!</Text>
          {/* Input Section */}
          <Text style={styles.login_text}>Login</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              keyboardType="phone-pad"
              maxLength={10}
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
          >
            <BouncyCheckbox
              size={22}
              fillColor="#6246D2"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#6246D2", borderRadius: 2 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 2 }}
            />
            <View>
              <Text style={styles.colortext1}>
                By continuing, You agree to our{" "}
                <Text style={{ color: "#6246D2" }}>Terms of Service</Text>,
                Privacy policies &{" "}
                <Text style={{ color: "#6246D2" }}>Content Policies</Text>
              </Text>
            </View>
          </View>
          {/* Continue Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Otp")}
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
    alignItems: "center",
  },
  bold1: {
    fontSize: 21,
    fontWeight: "600",
    textAlign: "center",
  },
  login_text: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#A1A0A5",
    marginBottom: "10",
    marginTop: "10",
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
});
