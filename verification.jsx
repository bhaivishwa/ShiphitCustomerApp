import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  placeholder,
  TextInput,
  phone,
  setPhone,
  handlePress,
  borderRadius,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function otp() {
  return (
        
    <View style={styles.otppage}>
      <View style={styles.verfication}>
        <Image
          source={require("./assets/signup.png")}
          style={styles.verifycode}
        />
      </View>

      <View style={styles.login}>
        <View>
          <Text style={styles.bold1}>Verification Code</Text>
        </View>
      
        <View>
        <Text>Enter the 4 digit code sent to your WhatsApp at</Text><View>

        <View>
        <Text>+91 9898989898</Text>
        </View>

        <View style={{ padding: 20 }}>
      <OTPInputView
        pinCount={4} 
        autoFocusOnLoad
        codeInputFieldStyle={{
          width: 50,
          height: 50,
          borderWidth: 2,
          borderColor: "#3498db",
          textAlign: "center",
          fontSize: 24,
          borderRadius: 10,
        }}
        onCodeFilled={(code) => console.log("OTP Entered:", code)}
      />
    </View>

      <View>
        <Text>Did't receive a code? <Text>Resend</Text></Text>
      </View>
    
        <View style={styles.btn}>
        <Button title="continue" onPress={handlePress} />
        </View>
 
            
             
              </View>
            
          </View>
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
    signuppage: {
      height: "65%",
      backgroundColor: "#6246D2",
      width: "100%",
    },
    signup: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    signupimage: {
      width: "125%",
      height: "125%",
    },
    login:{
      justifyContent:"center",
      alignItems:"center",
    },
    bold1:{
      fontSize:22,
    },
    buttonText:{
       borderRadius:50,
        backgroundColor: "pink",
        paddingVertical: 12,
        paddingHorizontal:30,
        padding:8,
    },
    containerr:{
      alignItems:"center",
       borderRadius:50,
        backgroundColor: "pink",
        paddingVertical:3,
        paddingHorizontal:3,
        padding:3,
        marginTop:5,
    },
    container:{
      alignItems:"center",
        borderRadius:50,
        paddingVertical:3,
        paddingHorizontal:3,
        padding:3,
        marginTop:8,
        borderWidth:3, 
        borderColor: "whitesmoke",
    },
    flex:{
      fontSize:14,
      fontWeight:306,
    },
     flex1:{
      fontSize:14,
      fontWeight:306,
    },
     text:{
      marginTop:8,
     },
     btn:{
      marginTop:5,
  
     },
     skip:{
      alignItems:"center",
      marginTop:8,
     },
     arrow:{
      alignItems:"center",
      marginTop:10,
     },
     colortext1:{
      color:"#6246D2",
     },
      colortext2:{
      color:"#6246D2",
     },
      colortext3:{
      color:"#6246D2",
     },
    
  });
  