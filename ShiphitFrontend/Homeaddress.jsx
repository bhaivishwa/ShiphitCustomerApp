import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

export default function Homeaddress() {
  const [phone, setPhone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.Addresspage}>
        <View style={styles.Myaddress}>
          <FontAwesome6 name="location-dot" size={24} color="#6246D2" />
          <Text style={styles.Home}>Home</Text>
        </View>
        <View style={styles.threeline}>
          <Entypo name="dots-three-horizontal" size={24} color="#6246D2" />
        </View>
      </View>

      <View style={styles.Addresscontent}>
        <Text style={styles.textpara}>
          2nd floor, Mohan business park, Don bosco school, saravampatti,
          Thudiyalur.
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 0.9,
          marginVertical: 18,
          color: "#000000",
        }}
      />

      <TouchableOpacity
        style={styles.Add}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addtxt}>+ Add new address</Text>
      </TouchableOpacity>

      {/* Modal for Adding New Address */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            
            <Text style={styles.bold1}>Enter Complete address</Text>
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
            <Text style={styles.login_text}>House No & Floor*</Text>
            <TextInput
              style={styles.input}
              placeholder="House no & floor"
              maxLength={30}
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.login_text}>Building & Block No*</Text>
            <TextInput
              style={styles.input}
              placeholder="Building & block no"
              maxLength={30}
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.login_text}>Landmark & Area Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Landmark & Area name"
              maxLength={30}
              value={phone}
              onChangeText={setPhone}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Save Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 18,
    color: "#60606C",
    textAlign: "center",
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 18,
    color: "#60606C",
    textAlign: "center",
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 18,
    textAlign: "center",
    color: "#60606C",
  },
  Myaddress: {
    flexDirection: "row",
    gap: 20,
  },
  Addresspage: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  Add: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  addtxt: {
    color: "#6246D2",
    fontSize: 16,
    fontWeight: "500",
  },
  Home: {
    color: "#29282C",
    fontSize: 18,
    fontWeight: "500",
  },
  textpara: {
    color: "#60606C",
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 40,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  bold1: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  login_text: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    color:"#60606C",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
    fontSize:16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6246D2",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
