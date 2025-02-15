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
  pickerSelectStyles,
  selectedValue,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import RNPickerSelect from "react-native-picker-select";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Courierpickupdetails() {
  const [
    phone,
    setPhone,
    selectedvalue,
    setSelectedvalue,
    text,
    setText,
    isOn,
    setIsOn,
  ] = useState("");
  const InputDropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Apple 🍎", value: "apple" },
      { label: "Banana 🍌", value: "banana" },
      { label: "Orange 🍊", value: "orange" },
    ]);
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding:8 }}>
      <ScrollView>
        <View style={styles.fullcontent}>
          <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.pickup}> Pickup details</Text>

              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Full name"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
              <View style={styles.btn2}>
                <TextInput
                  style={styles.inputone}
                  placeholder="Enter Pickup address"
                  value={text}
                  onChangeText={setText}
                />
                <View style={styles.location}>
                  <FontAwesome6 name="location-dot" size={25} color="blue" />
                </View>
              </View>

              <View style={styles.btn3}>
                <TextInput
                  style={styles.inputone}
                  placeholder="Mobile number"
                  value={text}
                  onChangeText={setText}
                />
                <View style={styles.contacts}>
                  <AntDesign name="contacts" size={25} color="blue" />
                </View>
              </View>

              <Text style={styles.saveaddressas}> Save address as</Text>
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
                      Office
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
                      Others
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <Text style={styles.pickup}> Delivery details</Text>

              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Full name"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
              <View style={styles.btn2}>
                <TextInput
                  style={styles.inputone}
                  placeholder="Enter Pickup address"
                  value={text}
                  onChangeText={setText}
                />
                <View style={styles.location}>
                  <FontAwesome6 name="location-dot" size={25} color="blue" />
                </View>
              </View>

              <View style={styles.btn3}>
                <TextInput
                  style={styles.inputone}
                  placeholder="Mobile number"
                  value={text}
                  onChangeText={setText}
                />
                <View style={styles.contacts}>
                  <AntDesign name="contacts" size={25} color="blue" />
                </View>
              </View>

              <Text style={styles.saveaddressas}> Save address as</Text>
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
                      Office
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
                      Others
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.shipment}>
            <Text style={styles.ship}> Shipment type</Text>
            <View style={styles.shipmenttype}>
              <TouchableOpacity
                style={styles.button6}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.buttonText4}> Commercial</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button7}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.buttonText5}> Non-Commercial</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.itemlist}>
              <Text style={styles.whatitems}>What Items</Text>
              <View style={styles.btn13}>
                <TouchableOpacity
                  style={styles.button8}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText6}>
                    Food{" "}
                    <MaterialCommunityIcons
                      name="window-close"
                      size={18}
                      color="#A1A0A5"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lastcontent}>
              <Text style={styles.suggestion}> Suggestions</Text>
              <View style={styles.btn14}>
                <TouchableOpacity
                  style={styles.button9}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText7}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button9}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText7}>Snacks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button9}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText7}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button9}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText7}>Medicines</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button9}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText7}>Sweets</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.click}>
              <Text style={styles.clickhere}>
                {"     "}
                Click here to View list of </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("restricteditems")}
                >
                  <Text style={styles.restrictedtxt}>restricted items</Text>
                </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    padding: 10,
    borderColor: "#F6F3FC",
    color: "#A1A0A5",
    fontSize: 18,
  },
  click: {
    fontSize: 18,
    display:"flex",
    flexDirection:"row",
  },
  whatitems: {
    fontSize: 17,
    borderColor: "#F6F3FC",
    color: "#60606C",
  },
  inputone: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    padding: 10,
    borderColor: "#F6F3FC",
    color: "#A1A0A5",
    fontSize: 18,
  },

  saveaddressas: {
    fontSize: 18,
    color: "#60606C",
    fontWeight: "300",
  },
  pickup: {
    fontWeight: "700",
    fontSize: 20,
    paddingVertical: 15,
    color: "#05040B",
  },
  delivery: {
    fontWeight: "700",
    fontSize: 16,
  },
  ship: {
    fontWeight: "400",
    fontSize: 17,
    borderColor: "#F6F3FC",
    color: "#60606C",
  },
  suggestion: {
    fontWeight: "500",
    fontSize: 18,
    paddingBottom: 5,
    color: "#29282C",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    marginTop: 5,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    alignItems: "flex-start",
  },
  button1: {
    backgroundColor: "white",
    paddingVertical: 15,
    marginTop: 5,
    width: "100%",
    borderRadius: 5,
  },
  button2: {
    backgroundColor: "white",
    paddingVertical: 15,
    marginTop: 5,
    width: "100%",
    borderRadius: 5,
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
    color: "#60606C",
    fontWeight: "500",
    fontSize: 18,
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 18,
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    width: 70,
    height: 30,
    borderWidth: 1,
    fontSize: 18,
  },

  btn1: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 2,
  },
  btn2: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 3,
    paddingTop: 15,
    borderRadius: 2,
  },
  btn3: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 25,
    borderRadius: 2,
  },
  buttonText7: {
    fontSize: 14,
    color: "#29282C",
    fontWeight: "400",
  },
  btn13: {
    width: "99%",
    paddingHorizontal: 15,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#CCC3D1",
    borderRadius: 8,
  },
  btn14: {
    width: "100%",
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 3,
    gap: 7,
  },
  btn5: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "90%",
    position: "relative",
    bottom: 40,
  },
  contacts: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "90%",
    position: "relative",
    bottom: 40,
  },
  Courierpage: {
    backgroundColor: "white",
  },
  button6: {
    borderColor: "#D7DBE0",
    paddingVertical: 15,
    marginTop: 5,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
  },
  button7: {
    backgroundColor: "white",
    paddingVertical: 15,
    marginTop: 5,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#F6F3FC",
    borderWidth: 1,
  },
  button8: {
    backgroundColor: "#F6F3FC",
    paddingVertical: 13,
    width: "30%",
    borderRadius: 5,
    alignItems: "center",
  },
  button9: {
    backgroundColor: "#F6F3FC",
    paddingVertical: 10,
    marginTop: 5,
    width: "22%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    position: "relative",
    right: 13,
    borderColor: "#60606C",
  },
  shipmenttype: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    gap: 8,
  },
  lastcontent: {
    paddingTop: 15,
    width: "100%",
    rowGap: 5,
    height: 110,
    backgroundColor: "#F6F3FC",
    paddingHorizontal: 18,
    marginBottom: 11,
    marginTop: 13,
  },
  lasttext: {
    color: "blue",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    textDecorationLine: "underline",
  },

  shipment: {
    backgroundColor: "white",
  },
  fullcontent: {
    backgroundColor: "white",
  },
  buttonText4: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
  buttonText5: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
  buttonText6: {
    color: "blue",
    fontSize: 18,
    height: 25,
  },
  itemlist: {
    width: "100%",
    borderRadius: "30",
    paddingHorizontal: 20,
  },
  clickhere: {
    fontSize: 16,
  },
  restrictedtxt: {
    fontSize: 17,
    paddingHorizontal:8,
    color:"#6246D2",
    position:"relative",
    right:6,

    
  },
});
