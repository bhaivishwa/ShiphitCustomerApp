import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import LottieView from "lottie-react-native";

export default function Login() {
  const [loading, setLoading] = useState(false); // State to handle loading
  const navigation = useNavigation();
  const phoneInput = useRef(null);

  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [checkboxError, setCheckboxError] = useState(""); // Checkbox validation error

  const handleCheckboxToggle = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setCheckboxError(""); // Clear error when checked
    }
  };

  // ✅ useForm for validation
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue, // Used to set checkbox value in form
  } = useForm({
    defaultValues: {},
  });

  // ✅ Handle Form Submission
  const onSubmit = async (data) => {
    const countryCode = phoneInput.current?.getCallingCode();
    console.log("Country Code:", countryCode);
    console.log("Phone Number:", data.phone);
    console.log("Name:", data.name);
    console.log("Terms Accepted:", data.terms); // Ensure checkbox value is submitted

    // Only proceed if checkbox is checked
    if (!data.terms) {
      setCheckboxError("You must agree to the terms.");
      return; // Don't submit the form if terms are not accepted
    }
    setLoading(true);

    await axios
      .post("https://shipmentbackend-ad96a7a505ec.herokuapp.com/sendOTP", {
        name: "Nithish",
        phoneNumber: `+${countryCode}${data.phone}`,
      })
      .then((d) => {
        setLoading(false);
        navigation.navigate("Otp", {
          name: data.name,
          countryCode: countryCode,
          phonenumber: data.phone,
          service: "signUpOtp",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6246D2" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              <View style={{ width: "100%", gap: 10 }}>
                <Text style={styles.login_text}>Signup</Text>
                <View
                  style={[
                    styles.container,
                    errors.name && { borderColor: "red" },
                  ]}
                >
                  <Controller
                    control={control}
                    rules={{
                      required: "Enter Your Name",
                    }}
                    render={({ field: { onChange, value } }) => (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                          paddingHorizontal: 10,
                        }}
                      >
                        <FontAwesome5
                          name="user-alt"
                          size={22}
                          color="#6246D2"
                        />
                        <TextInput
                          placeholder="Enter Your Name"
                          placeholderTextColor="#A1A0A5"
                          style={{ fontSize: 16 }}
                          value={value} // ✅ Bind the value
                          onChangeText={onChange} // ✅ Update the value
                        />
                      </View>
                    )}
                    name="name"
                  />
                </View>
                {errors.name && (
                  <Text style={styles.error}>{errors.name.message}</Text>
                )}

                {/* ✅ Phone Number Input with Validation */}
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
                <Controller
                  control={control}
                  rules={{
                    validate: (value) =>
                      value === true || "You must agree to the terms.", // Custom validation
                  }}
                  render={({ field: { onChange, value } }) => (
                    <BouncyCheckbox
                      size={22}
                      fillColor="#6246D2"
                      unfillColor="#FFFFFF"
                      iconStyle={{ borderColor: "#6246D2", borderRadius: 2 }}
                      innerIconStyle={{ borderWidth: 2, borderRadius: 2 }}
                      isChecked={value} // Controlled component
                      onPress={(checked) => {
                        onChange(checked); // Update form value
                        handleCheckboxToggle(checked);
                      }} // Function call on change
                    />
                  )}
                  name="terms"
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
              {errors.terms && (
                <Text style={[styles.error, { marginTop: 2 }]}>
                  {errors.terms.message}
                </Text>
              )}
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
                  {loading ? (
                    <LottieView
                      source={require("./assets/loading.json")} // Replace with the correct path to your animation
                      autoPlay
                      loop
                      style={{ width: 70, height: 70 }} // Adjust size as needed
                    />
                  ) : (
                    <Text style={styles.buttonText}>Continue</Text>
                  )}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  login: {
    padding: 25,
    gap: 15,
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
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "whitesmoke",
    paddingHorizontal: 5,
    height: 60,
    alignItems: "center",
    gap: 10,
  },
  colortext1: {
    fontWeight: "400",
    color: "#29282C",
    width: "60%",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
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
