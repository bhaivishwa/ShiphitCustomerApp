import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const phoneInput = useRef(null);
  const termsConditions = useRef(null);

  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleCheckboxToggle = (isChecked) => {
    setIsChecked(isChecked); // Update state
    console.log("Checkbox Toggled:", isChecked); // Log state change
  };

  // ✅ useForm for validation
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  // ✅ Handle Form Submission
  const onSubmit = async (data) => {
    // const countryCode = `+${phoneInput.current?.getCallingCode()}`; // Get selected country code
    // console.log("Country Code:", countryCode);
    // console.log("Phone Number:", data.phone);
    // console.log(termsConditions.current.onCheckboxPress());
    // // navigation.navigate("Otp");
    await axios
      .post("https://shiphit-backend.onrender.com/sendOTP", {
        name: "Nithish",
        phoneNumber: `+91${data.phone}`,
      })
      .then((d) => {
        navigation.navigate("Otp", {
          phone: `+91${data.phone}`,
          otp: d.data.otp,
        });
      })
      .catch((e) => {
        console.log(e);
      });
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

        {/* Login Section */}
        <View style={styles.login}>
          <View style={{ width: "100%" }}>
            <Text style={styles.bold1}>
              All your favorites from your native!
            </Text>
          </View>

          <View style={{ width: "100%", gap: 5 }}>
            <Text style={styles.login_text}>Login</Text>

            {/* ✅ Phone Number Input with Validation */}
            <View style={styles.container}>
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
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textContainer}
                    codeTextStyle={styles.codeText}
                    placeholder="Enter Mobile Number"
                    flagButtonStyle={styles.flagButton}
                    textInputProps={{
                      placeholderTextColor: "#A1A0A5",
                    }}
                  />
                )}
                name="phone"
              />
            </View>

            {/* ✅ Display Validation Error Message */}
            {errors.phone && (
              <Text style={styles.error}>{errors.phone.message}</Text>
            )}
          </View>

          {/* Terms & Conditions */}
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              size={22}
              fillColor="#6246D2"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#6246D2", borderRadius: 2 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 2 }}
              isChecked={isChecked} // Controlled component
              onPress={handleCheckboxToggle} // Function call on change
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

          {/* Continue Button with Validation */}
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
              onPress={handleSubmit(onSubmit)} // ✅ Form submission with validation
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
  flagButton: {
    marginLeft: -10,
    paddingHorizontal: 0,
  },
  phoneContainer: {
    width: "100%",
    borderRadius: 10,
    borderColor: "whitesmoke",
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
    flex: 1,
    backgroundColor: "#6246D2",
  },
  signup: {
    flex: 0.58,
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  login: {
    flex: 0.42,
    padding: 25,
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
    width: "60%",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 3,
  },
});
