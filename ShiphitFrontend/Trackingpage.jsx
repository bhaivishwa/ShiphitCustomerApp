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
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { style } from "twrnc";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import dataset from "./utilities/Trackingpage";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Trackingpage() {
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
    <SafeAreaView style={{ flex: 1, padding:10, backgroundColor:"white",}}>
      <ScrollView>
        <View style={styles.fullcontent}>
          <View style={styles.Courierpage}>
            <View style={styles.Courier}>
              <View style={styles.contents}>
                <View style={styles.btn4}>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate("")}
                  >
                   <Text style={styles.buttonText2}>
                      {" "}
                      Courier
                      <View></View>
                    </Text>
                  </TouchableOpacity>
                </View>
             
             
              </View>
            </View>
          </View>

\
              <View style={styles.btn1}>
                <View style={styles.container}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter AWS No"
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
          
          <View style={styles.pricecontent}>
          <Text style={styles.number}><Text style={styles.numberpad}>AWB NO</Text>:12345678065</Text>
          <View style={styles.price}>
          <MaterialIcons name="currency-rupee" size={18} color="#05040B" />
          <Text style={styles.pricenumber}>191</Text>
          </View>    
          </View>

          <View style={styles.weightcontain}>
          <Text style={styles.weight}>Weight <Text style={styles.kiloweight}>12Kg |</Text> December 11, 5.48 pm</Text>
          </View>

          <View style={styles.line}></View>

         <View style={styles.van}> 
         <FontAwesome6 name="van-shuttle" size={24} color="#6246D2" />
         <Text style={styles.days}>Economy (4 - 6 days)</Text>
         <View>
         </View>
         </View>

         <View>
          {dataset.map((d) => (
            <View style={styles.map}>
              <View>
                <Text style={styles.category}>{d.title}</Text>
              </View>
              {d.subtitles.map((d) => (
                <>
                    <Text style={styles.text1}>{d}</Text>
                </>
              ))}
            </View>
          ))}
        </View>

        <View>
        <Text style={styles.shipped}>Shipped To</Text>
        <Text style={styles.address}>2nd floor, Mohan business park, Don bosco school,
              Saravanampatti, Thudiyalur.
        </Text>
        </View>

         

        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    price:{
    display:"flex",
    flexDirection:"row",
    paddingVertical:5,
    justifyContent:"space-evenly",
    },
    pricecontent:{
        display:"flex",
        flexDirection:"row",
        paddingHorizontal:20,
        paddingVertical:5,
        },
        pricenumber:{
        fontSize:18,
        fontWeight:"400",
        color:"#05040B",
        },
        number:{
            fontSize:18,
            fontWeight:"400",
            color:"#05040B",
        },
        weight:{
            fontSize:18,
            fontWeight:"400",
            paddingHorizontal:20,
            color:"#A1A0A5",
        },
        days:{
        fontSize:18,
        fontWeight:"500",
        color:"#6246D2",
        backgroundColor:"#F6F3FC",
        },
        van:{   
       display:"flex",
       flexDirection:"row",
       gap:8,
       paddingVertical:20,
       marginLeft:18,
       marginTop:10,
       width:"65%",
       backgroundColor:"#F6F3FC",
       alignItems:"center",
       justifyContent:"center"
    
        },
      map:{
      paddingHorizontal:40,
      paddingVertical:10,
      gap:5,
      },
      shipped:{
      paddingHorizontal:20,
      paddingVertical:5,
      fontWeight:"500",
      fontSize:18,
      color:"#05040B",
      },
      address:{ 
        paddingHorizontal:20,
      paddingVertical:3,
      fontWeight:"400",
      fontSize:17,
      color:"#60606C",
      },
      text1:{
     color:"#60606C",
     fontSize:17,
      },
      category:{
    color:"#05040B",
    fontSize:17,
    fontWeight:"500",
      },
      kiloweight:{
      fontWeight:"400",
      color:"#05040B",
      },
      numberpad:{
      color:"#A1A0A5",
      fontWeight:"400",
      },
    

  input: {
    borderWidth:1,
    paddingVertical: 20,
    backgroundColor:"#FFFFFF",
    fontSize: 18,
    padding:15,
    borderColor:"#F6F3FC",
    fontWeight:"500",
  },
  contents: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
 
  buttonText2: {
    borderColor: "#F6F3FC",
    color:"#9C4BDB",
    fontSize: 18,    
  },


  btn1: {
    width: "100%",
    paddingHorizontal:15,
    paddingVertical: 10,
  },
  btn2: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 3,
    paddingTop: 15,
  },
 

  


 








 
 
 




});
