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
import Entypo from "@expo/vector-icons/Entypo";
import Scheduleorder from "./Scheduleorder";

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

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 8,}}>
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
          <Scheduleorder/>
          <View style={styles.shipment}>
            <Text style={styles.ship}>Shipment type</Text>
            <View style={styles.shipmenttype}>
              <TouchableOpacity
                style={styles.button6}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.buttonText7}> Commercial</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button7}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.buttonText8}> Non-Commercial</Text>
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
            <View style={styles.contentthree}>
              <Text style={styles.suggestion}> Suggestions</Text>
              <View style={styles.btn15}>
                <TouchableOpacity
                  style={styles.button12}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText12}>Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button12}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText12}>Snacks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button12}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText12}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button12}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText12}>Medicines</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button12}
                  onPress={() => navigation.navigate("")}
                >
                  <Text style={styles.buttonText12}>Sweets</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.click}>
              <Text style={styles.clickhere}>
                {"     "}
                Click here to View list of{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Restricteditems")}
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
    fontSize: 16,
    color:"#A1A0A5",
    fontWeight:"500",
  },
  click: {
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
    marginTop:8,
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
    fontSize: 16,
    fontWeight:"500",
    color:"#A1A0A5"
  },

  saveaddressas: {
    fontSize: 16,
    color: "#CCCCCC",
    fontWeight: "500",
    paddingHorizontal:5,
  },
  pickup: {
    fontWeight: "700",
    fontSize: 18,
    paddingVertical: 15,
    color: "#05040B",
    paddingHorizontal:7,
  },
  delivery: {
    fontWeight: "700",
    fontSize: 16,
  },
  ship: {
    fontWeight: "400",
    fontSize: 18,
    color:"#676D76",
    paddingHorizontal:10,
  },
  suggestion: {
    fontWeight: "500",
    fontSize: 18,
    paddingBottom: 5,
    color: "#29282C",
    paddingVertical: 15,
    paddingHorizontal:-3,
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
    padding:5,
    paddingVertical: 10,
    backgroundColor: "white",
    justifyContent:"space-evenly",  
    borderRadius:3,  
  },
  buttonText1: {
    padding:10,
    borderWidth: 1,
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    fontSize: 18,
    borderRadius:5,
  },
  buttonText12: {
    borderWidth: 1,
    borderColor: "#60606c",
    color: "#60606C",
    fontWeight: "500",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    padding:10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius:5,
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    padding:10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius:5,
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
  btn13: {
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#CCC3D1",
    borderRadius: 8,
    color:"#F6F3FC",
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

  shipmenttype: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    gap: 8,
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
    paddingVertical: 10,
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
    color: "#A54CDD",
    fontSize: 18,
    height: 28,
  },
  itemlist: {
    width: "100%",
    borderRadius: "30",
    paddingHorizontal:10,
  },
  clickhere: {
    fontSize: 16,
    color:"#60606C",
    fontWeight:"400",
  },
  restrictedtxt: {
    fontSize: 17,
    paddingHorizontal: 8,
    color: "#6246D2",
    position: "relative",
    right: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#6246D2",
  },
  choosedate: {
    color: "#2D5E63",
    paddingVertical: 10,
    fontWeight: "600",
    fontSize: 17,
  },
  choosedate1: {
    color: "#2D5E63",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "600",
    fontSize: 17,
  },

  datesandtime: {
    borderWidth: 1,
    height: 70,
    width: 55,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  timedatebox: {
    paddingHorizontal: 20,
  },
  schedulebox: {
    display: "flex",
    flexDirection: "row",
  },
  button9: {
    backgroundColor: "#F6F3FC",
    paddingVertical: 10,
    marginTop: 5,
    width: "18%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    position: "relative",
    right: 13,
    borderColor: "#60606C",
  },
  buttonText7: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "600",
  },
  buttonText8:{
    fontSize: 16,
    color: "#333333",
    fontWeight: "600",
  },
  lastcontent: {
    paddingVertical: 10,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  btn14: {
    width: "100%",
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 3,
    gap: 7,
    height: 100,
  },
  btn15: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    height: 60,
    marginTop:10,
  },
  contentsone: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 13,
    alignSelf: "center",
    gap: 8,
    alignItems: "center",
    borderBottomWidth: 1,
  },
  buttonText4: {
    color: "#60606C",
    fontWeight: "500",
    borderRadius: 5,
    padding: 8,
    borderWidth: 2,
    fontSize: 18,
  },
  buttonText5: {
    color: "#60606C",
    fontWeight: "500",
    borderRadius: 5,
    padding: 8,
    borderWidth: 2,
    fontSize: 18,
  },
  contenttwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  button10: {
    paddingVertical: 10,
    marginTop: 5,
    width: "27%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#60606C",
    color: "#FFFFFF",
  },
  button11: {
    paddingVertical: 10,
    marginTop: 5,
    width: "27%",
    marginLeft: 5,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#60606C",
  },
  timingcontent: {
    paddingTop: 20,
  },
  contentthree: {
    paddingHorizontal:12,
    backgroundColor:"#F6F3FC",
    marginTop:15,
    
  },
});
