import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";

const ThingsCanship = () => {
  const countries = [
    {
      id: "1",
      Firstname: "Vatha",
      Secondname: "kolambu",
      image: require("../assets/Group 37115.png"),
    },
    {
      id: "2",
      Firstname: "Vathal /",
      Secondname: "Vadagam",
      image: require("../assets/Group 37116.png"),
    },
    {
      id: "3",
      Firstname: "Medical",
      Secondname: "Products",
      image: require("../assets/Subject 72.png"),
    },
    {
      id: "4",
      Firstname: "Musical",
      Secondname: "Instruments",
      image: require("../assets/Subject 82.png"),
    },
  ];
  return (
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <Text style={tw`text-lg font-medium mb-4`}>
        Amazing Things You can ship
      </Text>
      <FlatList
        data={countries} // ✅ Using sample data
        keyExtractor={(item) => item.id}
        horizontal // ✅ Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item, index }) => (
          <View
            style={[
              {
                marginRight: index !== countries.length - 1 ? 15 : 0,
                height: 150,
                backgroundColor: "#F6F3FC",
                borderRadius: 4,
                width: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifyContent: "space-between",
              }, // ✅ Space between images
            ]}
          >
            <View style={{ marginTop: 10 }}>
              {/* Country Name */}
              <Text
                style={[
                  {
                    width: "100%",
                    textAlign: "center",
                    color: "#6246D2",
                    fontWeight: 600,
                    fontSize: 16,
                  }, // ✅ Ensures proper centering
                ]}
              >
                {item.Firstname}
              </Text>
              <Text
                style={[
                  {
                    textAlign: "center",
                    color: "#6246D2",
                    fontWeight: 600,
                    fontSize: 16,
                  }, // ✅ Ensures proper centering
                ]}
              >
                {item.Secondname}
              </Text>
            </View>
            {/* Image */}
            <Image
              style={{
                borderRadius: 10,
                height: 80,
                width: 80,
                marginLeft: "auto",
                marginRight: "auto",
                resizeMode: "contain",
              }}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ThingsCanship;
