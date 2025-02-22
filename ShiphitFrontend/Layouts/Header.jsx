import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { FlatList } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation(); // Access navigation object
  const [modalVisible, setModalVisible] = useState(false);
  const dataset = [
    {
      image: require(`../assets/flagsFinal/france.png`),
      name: "france",
      currency: "INR ₹",
    },
    {
      image: require(`../assets/flagsFinal/usa.png`),
      name: "USA",
      currency: "USD $",
    },
    {
      image: require(`../assets/flagsFinal/uk.png`),
      name: "UK",
      currency: "GBP £",
    },
    {
      image: require(`../assets/flagsFinal/singapore.png`),
      name: "Singapore",
      currency: "SGD S$",
    },
    {
      image: require(`../assets/flagsFinal/canada.png`),
      name: "Canada",
      currency: "CAD C$",
    },
  ];
  return (
    <View
      style={[
        {
          backgroundColor: "#6246D2",
          height: 105,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 25,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg pl-4`}>Courier</Text>
        </View>
        <View
          style={{ flexDirection: "row", gap: 20, alignSelf: "flex-start" }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("../assets/flagsFinal/france.png")} />
              <Text style={tw`text-white text-lg`}>IN</Text>
              <AntDesign name="down" size={14} color="white" />
            </View>
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.5)", // Dim background effect
              }}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}
            >
              <View
                style={{
                  position: "absolute",
                  top: 50,
                  right: 20,
                  backgroundColor: "white",
                  padding: 16,
                  borderRadius: 10,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  elevation: 5, // Shadow for Android
                }}
              >
                <FlatList
                  data={dataset}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginVertical: 13,
                          width: 300,
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Flag Image */}
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={item.image}
                            style={{
                              width: 25,
                              height: 25,
                              objectFit: "contain",
                              marginRight: 10,
                            }}
                          />
                          <Text style={{ fontSize: 18, fontWeight: "regular" }}>
                            {item.name}
                          </Text>
                        </View>
                        {/* Country Name & Currency */}
                        <View>
                          <Text style={{ fontSize: 16, color: "#000000" }}>
                            {item.currency}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
          <MaterialIcons name="help-outline" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;
