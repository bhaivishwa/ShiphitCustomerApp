import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import dataset from "../utilities/restrictedItems";
import Header from "./Header";

export default function Restricteditems() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, margin: 20, paddingBottom: 25 }}
      >
        <View>
          <Text style={styles.Restrictedfont}>Restricted Items</Text>
          <Text style={styles.Restrictedparagraph}>
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Donec non
            urna consectetur, commodo augue ut, ornare tellus. Integer congue,
            odio sed cursus consectetur, arcu erat bibendum neque, eu mattis
            quam elit id ligula.
          </Text>
          <View style={styles.wrongimg}>
            <Image
              source={require("../assets/wrong.png")}
              style={styles.wrong}
            />
            <Text style={styles.text1}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View style={styles.wrongimg}>
            <Image
              source={require("../assets/wrong.png")}
              style={styles.wrong}
            />
            <Text style={styles.text1}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View style={styles.wrongimg}>
            <Image
              source={require("../assets/wrong.png")}
              style={styles.wrong}
            />
            <Text style={styles.text1}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View style={styles.wrongimg}>
            <Image
              source={require("../assets/wrong.png")}
              style={styles.wrong}
            />
            <Text style={styles.text1}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View>
            <Text style={styles.Restrictedparagraph}>
              Lorem ipsum dolor ist amet, consecetur adipiscing elit. Donec non
              urna consectetur, commodo augue ut, ornare tellus.
            </Text>
          </View>

          {dataset.map((d) => (
            <View>
              <View>
                <Text style={styles.category}>{d.title}</Text>
                <Text style={styles.Restrictedparagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  non urna consectetur, commodo augue ut.
                </Text>
              </View>
              {d.subtitles.map((d) => (
                <>
                  <View style={styles.wrongimg}>
                    <Image
                      source={require("../assets/wrong.png")}
                      style={styles.wrong}
                    />
                    <Text style={styles.text1}>{d}</Text>
                  </View>
                </>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Restricted: {
    flex: 1,
  },
  Restrictedfont: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 13,
    color: "#05040B",
  },
  Restrictedparagraph: {
    paddingVertical: 10,
    fontSize: 14,
    lineHeight: 25,
    color: "#60606C",
  },
  wrongimg: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  wrong: {
    height: 15,
    width: 15,
  },
  text1: {
    fontSize: 16,
    color: "#29282C",
    fontWeight: "regular",
  },
  category: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 10,
    color: "#05040B",
  },
});
