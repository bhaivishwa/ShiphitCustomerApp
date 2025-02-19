import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import Api from "./dataHandling/datahandling";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const phoneInput = useRef(null);

  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(""); // Checkbox validation error
  const [error, seterror] = useState();
  const handleCheckboxToggle = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setCheckboxError(""); // Clear error when checked
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  console.log(phoneInput);
  const onSubmit = async (data) => {
    if (!isChecked) {
      setCheckboxError("You must accept the terms and conditions.");
      return;
    }
    try {
      const userResponse = await Api.CheckUserIsSignedin(data.phone); // Replace "Nithish" with dynamic name
      const countryCode = phoneInput.current?.getCallingCode();
      if (userResponse?.success) {
        await axios
          .post("https://shipmentbackend-ad96a7a505ec.herokuapp.com/sendOTP", {
            name: "Nithish",
            phoneNumber: `+91${data.phone}`,
          })
          .then(() => {
            navigation.navigate("Otp", {
              phonenumber: data.phone,
              countryCode: countryCode,
              service: "loginOtp",
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if (userResponse?.error) {
        seterror(userResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6246D2" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // Adjust for proper alignment
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled" // Ensures taps don't dismiss inputs
          showsVerticalScrollIndicator={false} // Hides the scroll bar for better UI
        >
          <View style={styles.signuppage}>
            <View style={styles.signup}>
              <Image
                source={require("./assets/signup.png")}
                style={styles.signupimage}
              />
            </View>
            <View style={styles.login}>
              <Text style={styles.bold1}>
                All your favorites from your native!
              </Text>
              <View style={{ width: "100%", gap: 5 }}>
                <Text style={styles.login_text}>Login</Text>
                <Text style={styles.error}>{error?.error}</Text>
                {/* Phone Input */}
                <View
                  style={[
                    styles.container,
                    errors.phone && { borderColor: "red" },
                  ]}
                >
                  <Controller
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid phone number",
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="IN"
                        layout="first"
                        onChangeText={onChange}
                        autoFocus={false}
                        containerStyle={[styles.phoneContainer]}
                        textContainerStyle={styles.textContainer}
                        codeTextStyle={styles.codeText}
                        placeholder="Enter Mobile Number"
                        flagButtonStyle={styles.flagButton}
                        textInputProps={{
                          placeholderTextColor: "#A1A0A5",
                          scrollEnabled: false, // Prevents unnecessary scrolling
                        }}
                      />
                    )}
                    name="phone"
                  />
                </View>

                {errors.phone && (
                  <Text style={styles.error}>{errors.phone.message}</Text>
                )}
              </View>

              {/* Checkbox */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "flex-start",
                }}
              >
                <BouncyCheckbox
                  style={{ alignSelf: "flex" }}
                  size={22}
                  fillColor="#6246D2"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#6246D2", borderRadius: 2 }}
                  innerIconStyle={{ borderWidth: 2, borderRadius: 2 }}
                  isChecked={isChecked}
                  onPress={handleCheckboxToggle}
                />
                <Text style={styles.colortext1}>
                  By continuing, You agree to our{" "}
                  <Text style={{ color: "#6246D2" }}>Terms of Service</Text>,
                  Privacy policies &{" "}
                  <Text style={{ color: "#6246D2" }}>Content Policies</Text>
                </Text>
              </View>

              {checkboxError ? (
                <Text
                  style={[
                    styles.error,
                    { marginTop: "0 important", marginBottom: 2 },
                  ]}
                >
                  {checkboxError}
                </Text>
              ) : null}

              {/* Submit Button */}
              <LinearGradient
                colors={["#6246D2", "#CE4FE3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flagButton: {
    marginLeft: -10,
    paddingHorizontal: 0,
  },
  phoneContainer: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    height: 50,
    alignItems: "center",
  },
  codeText: {
    margin: -20,
    paddingLeft: 5,
  },
  signuppage: {
    flexGrow: 1,
    backgroundColor: "#6246D2",
  },
  signup: {
    flex: 0.58,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "100%",
    height: 300, // Set a fixed height
    resizeMode: "contain",
    marginBottom: -20, // Helps blend into the next section smoothly
  },
  login: {
    flex: 0.2,
    // padding: 25,
    paddingHorizontal: 25,
    paddingVertical: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bold1: {
    fontSize: 21,
    fontWeight: "600",
  },
  login_text: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#A1A0A5",
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "whitesmoke",
    paddingHorizontal: 5,
    height: 60,
    justifyContent: "center",
  },
  colortext1: {
    fontWeight: "400",
    color: "#29282C",
    // width: "60%",
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 10,
    lineHeight: 20,
  },
  gradient: {
    width: "100%",
    borderRadius: 8,
    gap: 4,
  },
  button: {
    width: "100%",
    height: 55,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 1,
  },
});
