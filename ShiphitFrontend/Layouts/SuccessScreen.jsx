import { View, Text, TouchableOpacity, Image } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
const SuccessScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#6246D2",
          height: 30,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      ></View>
      <View
        style={{
          justifyContent: "space-around",
          height: "100%",
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          {/* Lottie Animation */}
          <LottieView
            source={require("../assets/SuccessLottie.json")} // Replace with your Lottie file
            autoPlay
            loop={false}
            style={{ width: 240, height: 240 }}
          />

          {/* Success Message */}
          <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 10 }}>
            Order placed successfully!
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <LinearGradient
            colors={["#6246D2", "#CE4FE3"]} // Gradient colors
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }} // Bottom-right
            style={styles.gradientBorder} // Outer gradient wrapper
          >
            <TouchableOpacity
              activeOpacity={0.7} // Built-in fade effect on press
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 18,
                backgroundColor: "white",
                justifyContent: "center",
                gap: 10,
                borderRadius: 10, // Rounded corners for gradient
              }}
            >
              <MaterialIcons name="track-changes" size={24} color="#6246D2" />
              <MaskedView
                maskElement={<Text style={styles.text}>Track your order</Text>}
              >
                <LinearGradient
                  colors={["#6246D2", "#CE4FE3"]}
                  start={{ x: -0.1, y: -0.1 }} // Extend the gradient beyond top-left
                  end={{ x: 1.2, y: 1.2 }}
                  style={styles.gradient} // Ensure styles are applied
                >
                  <Text style={[styles.text, { opacity: 0, color: "white" }]}>
                    Track your order
                  </Text>
                </LinearGradient>
              </MaskedView>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#6246D2", "#CE4FE3"]} // Gradient colors
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }} // Bottom-right
            style={styles.gradientBorder} // Outer gradient wrapper
          >
            <TouchableOpacity
              activeOpacity={0.4} // Built-in fade effect on press
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 18,
                justifyContent: "center",
                gap: 10,
                borderRadius: 10, // Rounded corners for gradient
              }}
            >
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color="white"
              />
              <Text style={{ color: "white", fontSize: 18 }}>
                Continue shopping
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = {
  gradientBorder: {
    padding: 1, // Thickness of border
    borderRadius: 12, // Rounded corners for gradient
  },
  innerContainer: {
    backgroundColor: "white", // Button background
    borderRadius: 10, // Slightly smaller to fit inside the border
    overflow: "hidden", // Prevents gradient from bleeding inside
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  text: {
    color: "#6246D2",
    fontWeight: "semibold",
    fontSize: 18,
  },
};
