import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";

export default function Scheduleorder({
  Date_,
  setDate,
  Noon,
  setNoon,
  Timeslot_Value,
  setTimeslot_Value,
}) {
  const dataset = [
    {
      date: "20",
      day: "Sun",
    },
    {
      date: "21",
      day: "Sun",
    },
    {
      date: "22",
      day: "Sun",
    },
    {
      date: "23",
      day: "Sun",
    },
    {
      date: "24",
      day: "Sun",
    },
    {
      date: "25",
      day: "Sun",
    },
    {
      date: "26",
      day: "Sun",
    },
    {
      date: "27",
      day: "Sun",
    },
  ];

  const Timeslot = [
    {
      Morning: ["9 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM"],
      Afternoon: ["12 PM - 1 PM", "1 PM - 2 PM", "2 PM - 3 PM", "3 PM - 4 PM"],
      Evening: ["4 PM - 5 PM", "5 PM - 6 PM"],
    },
  ];

  return (
    <View>
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
                    alignItems: "center",
                  },
                  { marginRight: index !== dataset.length - 1 ? 15 : 0 }, // ✅ Space between images
                ]}
                onPress={() => setDate({ date: item.date, day: item.day })}
              >
                <LinearGradient
                  colors={
                    Date_.date === item.date
                      ? ["#6246D2", "#CE4FE3"]
                      : ["#FFFFFF", "#FFFFFF"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 4,
                    position: "relative",
                    paddingHorizontal: 7,
                    paddingVertical: 12,
                    alignItems: "center",
                    gap: 4,
                    borderColor: "purple", // Light purple border
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 600,
                      color: Date_.date === item.date ? "white" : "black",
                    }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 600,
                      color: Date_.date === item.date ? "white" : "black",
                    }}
                  >
                    {item.day}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View
        style={
          Object.keys(Date_).length === 0
            ? { display: "none" }
            : {
                display: "flex",
                backgroundColor: "white",
                padding: 20,
                marginBottom: 10,
              }
        }
      >
        <Text style={styles.choosedate}>
          At What time should the proffessional arive ?
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {[
              {
                Noontext: "Morning",
                IconComponent: Fontisto,
                iconName: "day-cloudy",
              },
              {
                Noontext: "Afternoon",
                IconComponent: Feather,
                iconName: "sun",
              },
              {
                Noontext: "Evening",
                IconComponent: Fontisto,
                iconName: "night-alt-cloudy",
              },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setNoon({ Noon: item.Noontext })}
              >
                <LinearGradient
                  colors={
                    Noon.Noon === item.Noontext
                      ? ["#6246D2", "#CE4FE3"]
                      : ["#FFFFFF", "#FFFFFF"]
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderWidth: 0.5,
                    flexDirection: "row",
                    width: "100%",
                    borderRadius: 4,
                    paddingHorizontal: 7,
                    paddingVertical: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    borderColor: "purple", // Light purple border
                  }}
                >
                  <item.IconComponent
                    name={item.iconName}
                    size={22}
                    color={Noon.Noon === item.Noontext ? "white" : "black"} // ✅ Icon color change
                  />
                  <Text
                    style={[
                      styles.buttonText1,
                      {
                        color: Noon.Noon === item.Noontext ? "white" : "black",
                      },
                    ]}
                  >
                    {item.Noontext}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            display: `${Object.keys(Noon).length === 0 ? "none" : "flex"}`,
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 15,
            backgroundColor: "white",
            borderTopWidth: 2,
            borderColor: "#EBEBEB",
            marginTop: 20,
            paddingTop: 20,
          }}
        >
          {Timeslot[0][Noon.Noon]?.map((item) => (
            <TouchableOpacity
              style={{ width: "30%" }}
              onPress={() => setTimeslot_Value({ time: item })}
            >
              <LinearGradient
                colors={
                  Timeslot_Value?.time === item
                    ? ["#6246D2", "#CE4FE3"]
                    : ["#FFFFFF", "#FFFFFF"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderWidth: 0.5,
                  flexDirection: "row",
                  width: "100%",
                  borderRadius: 4,
                  paddingHorizontal: 7,
                  paddingVertical: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-start",
                  gap: 4,
                  borderColor: "purple", // Light purple border
                }}
              >
                <Text
                  style={[
                    styles.buttonText1,
                    {
                      color: Timeslot_Value?.time === item ? "white" : "black",
                    },
                  ]}
                >
                  {item}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
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
    paddingVertical: 20,
    paddingLeft: 20,
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
