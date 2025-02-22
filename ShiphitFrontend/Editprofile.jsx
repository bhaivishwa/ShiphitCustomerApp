import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Editprofile() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.signuppage}>
        <View style={styles.signup}>
        </View>
        {/* Login Section */}
        <View style={styles.login}>
          <View style={styles.Editprofile}>
          <Text style={styles.bold1}>Edit Profile</Text>
          <MaterialIcons name="clear" size={24} color="black" />
          </View>
        

          {/* Input Section */}
          <Text style={styles.login_text}>Your Name</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              keyboardType="phone-text"
              maxLength={30}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <Text style={styles.login_text1}>Enter your mobile number</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="+91 | Mobile number"
              keyboardType="phone-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
         

          {/* Terms & Conditions */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
          </View>
          {/* Continue Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.buttonText}>update</Text>
          </TouchableOpacity>
         
        
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signuppage: {
    flex: 1,
    backgroundColor: "#6246D2",
  },
  signup: {
    flex: 0.6, // Take up 60% of the screen
    justifyContent: "center",
    alignItems: "center",
  },

  login: {
    flex: 0.4, // Take up 40% of the screen
    padding:25,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal:20,
    gap:3,
  },
 
  login_text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#60606C",  
    paddingVertical:13,
    paddingHorizontal:5,
  },
  login_text1: {
    fontSize: 17,
    fontWeight: "500",
    color: "#60606C", 
    paddingVertical:13,
    paddingHorizontal:5, 
  },
  login_text2: {
    fontSize: 17,
    fontWeight: "500",
    color: "#60606C", 
    paddingVertical:13,
    paddingHorizontal:5, 
  },
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "whitesmoke",
    paddingHorizontal: 10,
    height: 50,
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#9960D8",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText:{
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:"500",
  },
  Editprofile:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  bold1:{
    fontSize:18,
    fontWeight:"500",
    paddingHorizontal:5,
  },
  

});
