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

export default function Termsandcondition() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ScrollView style={{ padding: 15 }}>
        <View style={styles.Termsandconditionpage}>
          <Text style={styles.Termsandconditionfont}>Terms & Conditions</Text>
          <Text style={styles.Termsandconditionparagraph}>
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Donec non
            urna consectetur, commodo augue ut, ornare tellus. Integer congue,
            odio sed cursus consectetur, arcu erat bibendum neque, eu mattis
            quam elit id ligula.
          </Text>
          <Text style={styles.Termsandconditionparagraphone}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec no hr
            a consectetur, commodo augue ut, ornare tellus. Integer congue, odio
            sed cursus consectetur, arcu erat, bibendum neque, eu mattis quam
            elit id ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec non urna consectetur, commodo augue ut, ornare tellus.
            Integer congue, odio sed cursus consectetur, arcu erat bibendum
            neque, eu mattis quam elit id ligula.Lorem ipsm dolor sit amet,
            consectetur adipiscing elit. Donor non urna consectetur, commodo
            augue ut, ornare tellus. Integer conque, odio sed cursus
            consectetur, arcu erat bibendum neque, eu mattis quam elit id
            ligula.
          </Text>
          <Text style={styles.Termsandconditionfontone}>
            Lorem Ipsum dolor sit amet
          </Text>
          <Text style={styles.Termsandconditionparagraph}>
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Donec non
            urna consectetur, commodo augue ut, ornare tellus. Integer congue,
            odio sed cursus consectetur, arcu erat bibendum neque, eu mattis
            quam elit id ligula.Lorem Ipsum dolor ist amet, consectetur
            adipiscing elit. Donec non urna consectetur, commodo augue ut,
            ornare tellus. Integer conque, odio sed cursus consectetur, arcu
            erat bibendum newque, eu mattis quam elit id ligula. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec non urna
            consectetur, commodo augue ut, ornare tellus. Integer congue, odio
            sed cursus consectetur, arcu erat bibendum neque, eu mattis quam
            elit id ligula.
          </Text>

          <Text style={styles.Termsandconditionfontone}>
            Lorem Ipsum dolor sit amet
          </Text>
          <Text style={styles.Termsandconditionparagraph}>
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Donec non
            urna consectetur, commodo augue ut, ornare tellus. Integer congue,
            odio sed cursus consectetur, arcu erat bibendum neque, eu mattis
            quam elit id ligula.Lorem Ipsum dolor ist amet, consectetur
            adipiscing elit. Donec non urna consectetur, commodo augue ut,
            ornare tellus. Integer conque, odio sed cursus consectetur, arcu
            erat bibendum newque, eu mattis quam elit id ligula. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec non urna
            consectetur, commodo augue ut, ornare tellus. Integer congue, odio
            sed cursus consectetur, arcu erat bibendum neque, eu mattis quam
            elit id ligula.
          </Text>
        </View>
      </ScrollView>
      <View style={{ position: "sticky", bottom: 0, padding: 10 }}>
        <View style={styles.Termsandcondition}>
          <TouchableOpacity
            style={styles.Decline}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.Declinebtn}> Decline</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Accept}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.Acceptbtn}> Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Restricted: {
    flex: 1,
  },
  Termsandconditionfont: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 13,
    color: "#05040B",
  },
  Termsandconditionparagraph: {
    paddingVertical: 10,
    lineHeight: 25,
    fontSize: 14,
    color: "#60606C",
  },
  Termsandconditionparagraphone: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#60606C",
    lineHeight: 28,
  },
  Termsandconditionfontone: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 13,
    color: "#29282C",
  },
  Declinebtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#984ADA",
  },
  Acceptbtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  Decline: {
    borderColor: "#984ADA",
    paddingVertical: 13,
    marginTop: 5,
    width: "45%",
    borderRadius: 50,
    alignItems: "center",
    borderWidth: 2,
  },
  Accept: {
    backgroundColor: "#984ADA",
    paddingVertical: 15,
    marginTop: 5,
    width: "45%",
    borderRadius: 50,
    alignItems: "center",
  },
  Termsandcondition: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#F6F3FC",
    justifyContent: "space-between",
  },
});
