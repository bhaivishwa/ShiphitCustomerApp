import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";

const FrequentlyShiped = () => {
  const countries = [
    { id: "1", name: "France", image: require("../assets/france.png") },
    { id: "2", name: "USA", image: require("../assets/usa.png") },
    { id: "3", name: "UKFrance", image: require("../assets/uk.png") },
    { id: "4", name: "Singapore", image: require("../assets/singapore.png") },
    { id: "5", name: "USA", image: require("../assets/usa.png") },
  ];
  return (
    <View style={{ marginBottom: 2, backgroundColor: "white", padding: 20 }}>
      <Text style={tw`text-lg font-medium`}>Frequently shipped from India</Text>
      <FlatList
        data={countries} // ✅ Using sample data
        keyExtractor={(item) => item.id}
        horizontal // ✅ Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item, index }) => (
          <View
            style={[
              tw`relative h-32 w-24`,
              { marginRight: index !== countries.length - 1 ? 15 : 0 }, // ✅ Space between images
            ]}
          >
            {/* Image */}
            <Image
              style={{
                borderRadius: 10,
                height: 128,
                width: 96,
                resizeMode: "cover",
              }}
              source={item.image}
            />

            {/* Gradient Overlay */}
            <LinearGradient
              colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.1)", "transparent"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                borderRadius: 10,
              }}
            />

            {/* Country Name */}
            <Text
              style={[
                tw`absolute bottom-2 text-white font-bold text-xs`,
                { width: "100%", textAlign: "center" }, // ✅ Ensures proper centering
              ]}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FrequentlyShiped;
