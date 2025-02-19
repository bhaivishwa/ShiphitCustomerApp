import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Entypo from "@expo/vector-icons/Entypo";
import { FlatList } from "react-native-gesture-handler";

export default function Scheduleorder() {
  const [Date_, setDate] = useState({});
  const [Noon, setNoon] = useState({});
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
  const dataset = [
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.lastcontent}>
          <Text style={styles.choosedate}>Choose date you want ?</Text>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={dataset}
              keyExtractor={(item) => item.date}
              horizontal
              showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: "white",
                      paddingHorizontal: 7,
                      paddingVertical: 12,
                      borderWidth: 1,
                      borderRadius: 4,
                      alignItems: "center",
                    },
                    { marginRight: index !== dataset.length - 1 ? 15 : 0 }, // ✅ Space between images
                  ]}
                  onPress={() => setDate({ date: item.date, day: item.day })}
                >
                  <Text style={{ fontWeight: 600 }}>{item.date}</Text>
                  <Text style={{ fontWeight: 600 }}>{item.day}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View
          style={
            Object.keys(Date_).length === 0
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          <Text style={styles.choosedate}>
            At What time should the proffessional arive ?
          </Text>
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {["Morning", "Afternoon", "Evening"].map((d) => (
                <TouchableOpacity
                  style={styles.noon}
                  onPress={() => setNoon({ Noon: d })}
                >
                  <Entypo name="icloud" size={24} color="black" />
                  <Text style={styles.buttonText1}>{d}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            display: `${Object.keys(Noon).length === 0 ? "none" : "flex"}`,
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 15,
            paddingVertical: 20,
            borderTopWidth: 2,
            borderColor: "#EBEBEB",
          }}
        >
          <TouchableOpacity
            style={styles.noon}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText1}>9 AM - 10 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.noon}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText1}>10 AM - 11 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.noon}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText1}>11 AM - 12 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.noon}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText1}>12 PM - 1 PM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noon: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    width: "30%",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  choosedate: {
    color: "black",
    fontWeight: "600",
    fontSize: 17,
  },
  choosedate1: {
    color: "blue",
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
  timedatebox: {},
  schedulebox: {
    display: "flex",
    flexDirection: "row",
  },
  button9: {
    backgroundColor: "#F6F3FC",
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
    color: "#29282C",
    fontWeight: "600",
  },
  lastcontent: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  buttonText1: {
    fontWeight: "500",
    fontSize: 14,
  },
  buttonText2: {
    color: "#60606C",
    fontWeight: "500",
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 18,
  },
  buttonText3: {
    color: "#60606C",
    fontWeight: "500",
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 18,
  },

  contenttwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button10: {
    marginTop: 5,
    width: "27%",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#60606C",
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
});
