import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

export default function Notification() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ScrollView style={{ padding: 15 }}>
        <View style={styles.Notificationpage}>
          <View style={styles.notifytxt}>
            <Text style={styles.Notificationfont}>Today</Text>
            <Text style={styles.Notificationfont1}>Mark all as read</Text>
          </View>

          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>

          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>

          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>
          <Text style={styles.Notificationfont}>Yesterday</Text>
          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>
          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>

          <Text style={styles.Notificationfont}>Dec 2022</Text>

          <View style={styles.contentone}>
            <View style={styles.Sweetsbox}>
              <View style={styles.sweetscontent}>
                <Image
                  source={require("./assets/Sweet.png")}
                  style={styles.signupimage}
                />
              </View>
              <View style={styles.sweets}>
                <Text style={styles.paracontentone}>
                  Lorem Ipsum is simply dummy text of the printing text of the
                  text printing
                </Text>
                <Entypo name="dots-three-vertical" size={24} color="#A1A0A5" />
              </View>
            </View>
            <View style={styles.daysagotxt}>
              <Text style={styles.txt}>2 days ago.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Restricted: {
    flex: 1,
  },
  Notificationfont: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 13,
    color: "#05040B",
    fontWeight: "700",
  },
  Notificationfont1: {
    fontSize: 18,
    fontWeight: "400",
    paddingVertical: 13,
    color: "#29282C",
  },
  notifytxt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sweets: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
  Sweetsbox: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  daysagotxt: {
    paddingHorizontal: 80,
  },
  contentone: {
    borderWidth: 1,
    borderColor: "#F6F3FC",
  },
  txt: {
    color: "#A1A0A5",
  },
  paracontentone: {
    color: "#60606C",
    fontWeight: "400",
    fontSize: 14,
  },
});
