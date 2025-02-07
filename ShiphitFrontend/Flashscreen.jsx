import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Flashscreen() {
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6246D2" }}>
      <View style={styles.signuppage}>
        <Image
          source={require("./assets/shiphit.png")}
          style={styles.signupimage}
        />
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
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  signupimage: {
    width: "80%",
    height: "90%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});
