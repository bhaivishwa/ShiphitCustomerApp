import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
import MapView, { Marker } from "react-native-maps";
import * as Progress from 'react-native-progress';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ProgressBar from 'react-native-progress/Bar';

export default function Trackingmap() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  
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
  

  const navigation = useNavigation("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />
      <View>
        <TouchableOpacity>
          onPress={() => navigation.navigate("")}
          <Text style={styles.buttonText2}>Pick up</Text>
        </TouchableOpacity>
      </View>
      <View style={{height:"50%",}}>
        <MapView />
        <MapView
        style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      <Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4366,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      title={"Testing"}
    />
      </View>


      <View style={{borderWidth:1,borderColor:"grey",borderRadius:20,width:"100%",height:"30%",backgroundColor:"white"}}>
      <Text style={{paddingHorizontal:15,marginTop:20,color:"#60606C",fontWeight:"500",fontSize:16,}}>ARRIVING IN</Text>
      <Text style={{paddingHorizontal:15,marginTop:10,color:"#05040B",fontWeight:"500",fontSize:18,}}>10 mins</Text>
      



   
      <View style={{paddingHorizontal:15,paddingVertical:30,display:"flex",flexDirection:"row",justifyContent:"space-around",backgroundColor:"#F6F3FC",borderWidth:1,color:"#F6F3FC"}}>
      <Image source={require("./assets/menimg.png")} style={{}}/>
      <View><Text style={{fontWeight:"500", fontSize:16}}>Hari<Text style={{fontSize:16, fontWeight:"300",}}> is on the way to to pick</Text></Text><Text style={{fontWeight:"300", fontSize:16,}}>up your courier</Text>
      </View>
   
       <TouchableOpacity
                          style={styles.button3}
                          onPress={() => navigation.navigate("")} >
                            <FontAwesome6 name="phone-volume" size={24} color="#B94DE0" borderColor="#FFFFFF" backgroundColor="#FFFFFF"paddingVertical="10" paddingHorizontal="10" padding="10"/>
                        </TouchableOpacity>       
      </View>
      </View>
    
  
      

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  txt: {
    color: "#05040B",
    width: "70%",
  },
  phone: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F6F3FC",
  },
  buttonText2: {
    borderColor: "#F6F3FC",
    color: "#9C4BDB",
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontSize: 18,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
});
