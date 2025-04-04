import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
import MapView, { Marker } from "react-native-maps"; 
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Navigatemap() {
  const [phone, setPhone] = useState(""); // Use separate useState for each state
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />
      <View style={{ height: "66%" }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={(data) => console.log(data)} // Log region change for debugging
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4366,
            }}
            title={"Testing"}
            onPress={(data) => console.log(data.nativeEvent.coordinate)}
          />
        </MapView>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>ARRIVING IN</Text>
        <Text style={styles.address}>
          10 mins
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Verifypassword")}
        >
          <Text style={styles.buttonText}>NAVIGATION</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#AA4CDE",
    fontWeight: "700",
    fontSize: 20,
  },
  address: {
    color: "black",
    fontWeight: "500",
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    paddingVertical: 15,
    width: "70%",
    borderRadius: 10,
    backgroundColor: "#9F4BDC",
    borderWidth: 1,
    borderColor: "#CCA5ED",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});
