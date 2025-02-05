import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function shiphit() {
  return (
       <View style={Styles.shiphit}>
            <Image source={require("./assets/shiphit.png")}> style={styles.shiphitlogo}
            </Image>
       </View>
  );
}
const styles = StyleSheet.create({
    shiphit:{
        backgroundColor:"#6246D2",
    },
    shiphitlogo:{
        alignItems:"center",
        justifyContent:"center",
    },
});