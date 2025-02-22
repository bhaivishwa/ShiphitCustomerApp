import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Scheduleorder from "./Scheduleorder";
import { LinearGradient } from "expo-linear-gradient";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";

export default function Courierpickupdetails() {
  const [text, setText] = useState("");
  const [shipmentDetails, setshipmentDetails] = useState({});
  const [shipmentType, setshipmentType] = useState("");
  const [whatitems, setwhatitems] = useState([]);
  const navigation = useNavigation();
  const [suggestions, setsuggestions] = useState([
    "Dress",
    "Snacks",
    "Photos",
    "Medicines",
    "Sweets",
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <ScrollView>
        <View>
          <Header_without_currency_change />
          <View style={styles.Courierpage}>
            <View style={{ gap: 10 }}>
              <Text style={styles.pickup}> Pickup details</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Full Name"
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Enter Pickup Address"
                  value={text}
                  onChangeText={setText}
                />
                <FontAwesome6 name="location-dot" size={25} color="#7C48D6" />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Mobile Number"
                  value={text}
                  onChangeText={setText}
                />
                <AntDesign name="contacts" size={25} color="#7C48D6" />
              </View>
              <View>
                <Text style={styles.saveaddressas}>Save address as</Text>
                <View style={styles.contents}>
                  {["Home", "Office", "Others"].map((label, index) => (
                    <LinearGradient
                      key={index}
                      colors={["#6246D2", "#CE4FE3"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.gradientBorder}
                    >
                      <TouchableOpacity
                        onPress={() => navigation.navigate("")}
                        style={styles.buttonContainer}
                      >
                        <Text style={styles.buttonText}>{label}</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Courierpage}>
            <View style={{ gap: 10 }}>
              <Text style={styles.pickup}>Delivery details</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Full Name"
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Enter Delivery Address"
                  value={text}
                  onChangeText={setText}
                />
                <FontAwesome6 name="location-dot" size={25} color="#7C48D6" />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Mobile Number"
                  value={text}
                  onChangeText={setText}
                />
                <AntDesign name="contacts" size={25} color="#7C48D6" />
              </View>
              <View>
                <Text style={styles.saveaddressas}>Save address as</Text>
                <View style={styles.contents}>
                  {["Home", "Office", "Others"].map((label, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigation.navigate("")}
                    >
                      <LinearGradient
                        colors={["#6246D2", "#CE4FE3"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientBorder}
                      >
                        <View style={styles.buttonContainer}>
                          <Text style={styles.buttonText}>{label}</Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <Scheduleorder />
          <View style={{ padding: 20, backgroundColor: "white" }}>
            <Text style={styles.ship}>Shipment type</Text>
            <View style={styles.shipmenttype}>
              <TouchableOpacity
                style={{ width: "45%" }}
                onPress={() => setshipmentType({ shipmentType: "Personal" })}
              >
                <LinearGradient
                  colors={
                    shipmentType.shipmentType == "Personal"
                      ? ["#6246D2", "#CE4FE3"]
                      : ["#FFFFFF", "#FFFFFF"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 4,
                    paddingHorizontal: 7,
                    paddingVertical: 12,
                    borderColor: "#F6F3FC",
                    paddingVertical: 15,
                    width: "100%",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <View
                    style={{
                      display:
                        shipmentType?.shipmentType == "Personal"
                          ? "flex"
                          : "none",
                      backgroundColor: "white",
                      borderRadius: 999,
                      padding: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      position: "absolute",
                      top: "73%",
                      left: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-bold"
                      size={14}
                      color="#7C49D6"
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color:
                        shipmentType?.shipmentType == "Personal"
                          ? "white"
                          : "black",
                      fontWeight: "600",
                    }}
                  >
                    Personal
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "45%" }}
                onPress={() => setshipmentType({ shipmentType: "Commercial" })}
              >
                <LinearGradient
                  colors={
                    shipmentType.shipmentType == "Commercial"
                      ? ["#6246D2", "#CE4FE3"]
                      : ["#FFFFFF", "#FFFFFF"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 4,
                    paddingHorizontal: 7,
                    paddingVertical: 12,
                    borderColor: "#F6F3FC",
                    paddingVertical: 15,
                    width: "100%",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <View
                    style={{
                      display:
                        shipmentType.shipmentType == "Commercial"
                          ? "flex"
                          : "none",
                      backgroundColor: "white",
                      borderRadius: 999,
                      padding: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      position: "absolute",
                      top: "73%",
                      left: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-bold"
                      size={14}
                      color="#7C49D6"
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color:
                        shipmentType?.shipmentType == "Commercial"
                          ? "white"
                          : "black",
                      fontWeight: "600",
                    }}
                  >
                    Commercial
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.itemlist}>
              <Text style={styles.ship}>What Items</Text>
              <View style={styles.btn13}>
                <FlatList
                  data={whatitems}
                  horizontal
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
                  contentContainerStyle={{
                    paddingVertical: 6,
                    height: 60,
                    paddingHorizontal: 6,
                  }}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      style={[
                        styles.button8,
                        {
                          marginRight:
                            index !== suggestions.length - 1 ? 10 : 0,
                        },
                      ]}
                    >
                      <Text style={styles.buttonText6}>{item}</Text>
                      <MaterialCommunityIcons
                        onPress={() =>
                          setwhatitems(
                            whatitems.filter((value) => value !== item)
                          )
                        }
                        name="window-close"
                        size={20}
                        color="#A1A0A5"
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            <View style={styles.contentthree}>
              <Text style={styles.suggestion}>Suggestions</Text>
              <FlatList
                data={suggestions}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
                contentContainerStyle={{
                  paddingVertical: 10,
                }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "#60606C",
                      alignSelf: "flex-start",
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      borderRadius: 4,
                      marginRight: index !== suggestions.length - 1 ? 15 : 0,
                    }}
                    onPress={() =>
                      setwhatitems((prev) =>
                        prev.includes(item) ? prev : [...prev, item]
                      )
                    }
                  >
                    <Text
                      style={{
                        color: "#60606C",
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.click}>
              <Text style={styles.clickhere}>Click here to View list of</Text>
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
  saveaddressas: {
    fontSize: 16,
    color: "#60606C",
    fontWeight: "500",
  },
  contents: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 3,
    marginTop: 15,
    padding: 5,
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 1, // Thin gradient border effect
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 20,
    padding: 10,
    borderColor: "#F6F3FC",
    fontSize: 16,
    color: "#A1A0A5",
    justifyContent: "space-between",
    flexDirection: "row",
    fontWeight: "400",
  },
  click: {
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
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
    fontWeight: "500",
    color: "#A1A0A5",
  },

  pickup: {
    fontWeight: "700",
    fontSize: 18,
    color: "#05040B",
  },
  delivery: {
    fontWeight: "700",
    fontSize: 16,
  },
  ship: {
    fontWeight: "400",
    fontSize: 18,
    color: "#686F76",
    // paddingHorizontal: 10,
  },
  suggestion: {
    fontWeight: "500",
    fontSize: 18,
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
    padding: 10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 5,
  },
  buttonText3: {
    borderColor: "#F6F3FC",
    color: "#60606C",
    fontWeight: "500",
    padding: 10,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 5,
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
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 4,
    borderColor: "#CCC4D1",
    borderRadius: 5,
    flexDirection: "column",
    color: "#F6F3FC",
    flexDirection: "row",
  },
  btn14: {
    width: "100%",
    paddingHorizontal: 35,
    display: "flex",
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
  Courierpage: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 5,
  },
  button6: {
    borderColor: "#F6F3FC",
    paddingVertical: 15,
    marginTop: 5,
    width: "45%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
  },
  button7: {
    backgroundColor: "white",
    paddingVertical: 15,
    marginTop: 5,
    width: "45%",
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#F6F3FC",
    borderWidth: 1,
  },
  button8: {
    backgroundColor: "#F6F3FC",
    flexDirection: "row",
    gap: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
  },

  shipmenttype: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  lasttext: {
    color: "blue",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    textDecorationLine: "underline",
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
  },
  itemlist: {
    width: "100%",
    borderRadius: "30",
    marginTop: 15,
  },
  clickhere: {
    fontSize: 17,
    color: "#60606C",
    fontWeight: "400",
  },
  restrictedtxt: {
    fontSize: 17,
    paddingHorizontal: 8,
    color: "#6246D2",
    position: "relative",
    right: 2,
    fontWeight: "500",
    textDecorationLine: "underline",
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
  buttonText8: {
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
    marginTop: 10,
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
    padding: 15,
    gap: 10,
    backgroundColor: "#F6F3FC",
    marginTop: 10,
    borderRadius: 5,
  },
});
