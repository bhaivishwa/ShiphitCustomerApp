import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import MaskedView from "@react-native-masked-view/masked-view";
import tw from "tailwind-react-native-classnames";

const ServiceCard = ({ title, duration, activeTab, setactiveTab }) => (
  <TouchableOpacity onPress={() => setactiveTab(title)} style={{ flex: 1 }}>
    <LinearGradient
      colors={
        activeTab == title ? ["#6246D2", "#CE4FE3"] : ["#FFFFFF", "#FFFFFF"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        position: "relative",
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        gap: 4,
        borderWidth: 1, // Adjust thickness as needed
        borderColor: "#F6F3FC", // Light purple border
      }}
    >
      {activeTab === title && ( // Show checkmark only for the active tab
        <View
          style={{
            position: "absolute",
            top: 13,
            left: 13,
            backgroundColor: "white",
            borderRadius: 999,
            padding: 1,
            alignItems: "center",
            justifyContent: "center",
            width: 20,
            height: 20,
          }}
        >
          <MaterialCommunityIcons name="check-bold" size={14} color="#7C49D6" />
        </View>
      )}
      <Text
        style={{
          color: activeTab == title ? "white" : "#05040B",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: activeTab == title ? "white" : "#60606C",
          fontSize: 15,
          fontWeight: "600",
        }}
      >
        {duration}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

const WeightType = ({ title, duration, Weight_type, setWeight_type }) => (
  <TouchableOpacity onPress={() => setWeight_type(title)}>
    <LinearGradient
      colors={
        Weight_type == title ? ["#6246D2", "#CE4FE3"] : ["#FFFFFF", "#FFFFFF"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        position: "relative",
        alignSelf: "flex-start",
        borderRadius: 2,
        alignItems: "center",
        gap: 4,
        width: 55,
        height: 53,
        justifyContent: "center",
      }}
    >
      {/* <Text
        style={{
          color: Weight_type == title ? "white" : "red",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {title}
      </Text> */}

      <MaskedView maskElement={<Text style={styles.text}>{title}</Text>}>
        <LinearGradient
          colors={
            Weight_type != title
              ? ["#6246D2", "#CE4FE3"]
              : ["#FFFFFF", "#FFFFFF"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} // Left to right
        >
          <Text style={[styles.text, { opacity: 0 }]}>{title}</Text>
        </LinearGradient>
      </MaskedView>
    </LinearGradient>
  </TouchableOpacity>
);

const countries = [
  {
    id: "1",
    weight: "5Kg",
    resolution: 32,
    image: require("../assets/france.png"),
    size: "Small",
    Price: 5000,
    pastPrice: 5445,
    selected: true,
  },
  {
    id: "2",
    weight: "10Kg",
    resolution: 36,
    image: require("../assets/usa.png"),
    size: "Medium",
    Price: 7500,
    pastPrice: 7635,
    selected: false,
  },
  {
    id: "3",
    weight: "15Kg",
    resolution: 38,
    image: require("../assets/uk.png"),
    size: "Large",
    Price: 10500,
    pastPrice: 10905,
    selected: false,
  },
  {
    id: "4",
    weight: "20Kg",
    resolution: 40,
    image: require("../assets/singapore.png"),
    size: "Extra large",
    Price: 15000,
    pastPrice: 15890,
    selected: false,
  },
];

const Service = () => {
  const [activeTab, setactiveTab] = useState("Economy");
  const [Weight_type, setWeight_type] = useState("Kg");
  const [weight, setweight] = useState("0");

  return (
    <View
      style={{
        padding: 20,
        marginTop: 2,
        gap: "20",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 20,
        }}
      >
        <ServiceCard
          title="Economy"
          duration="4 - 6 days"
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        />
        <ServiceCard
          title="Express"
          duration="2 - 3 days"
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#957EE1",
            position: "absolute",
            bottom: 0,
            left: 2,
            zIndex: 3,
            width: 15,
            height: 15,
            borderRadius: "50%",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            width: "60%",
            alignItems: "center",
            padding: 10,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#F6F3FC",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            value={weight}
            onChange={(e) => {
              setweight(e.target.value);
            }}
            style={{
              // Corrected property
              color: "black",
              fontWeight: "600",
              fontSize: 20,
              width: "82%",
              borderRadius: 6, // Added for smooth edges
            }}
            keyboardType="numeric" // Ensures number input
          />
          <MaskedView maskElement={<Text style={styles.text}>Kg</Text>}>
            <LinearGradient
              colors={["#6246D2", "#CE4FE3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} // Left to right
            >
              <Text style={[styles.text, { opacity: 0 }]}>Kg</Text>
            </LinearGradient>
          </MaskedView>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 6,
            gap: 10,
            borderRadius: 4,
            borderWidth: 1, // Adjust thickness as needed
            borderColor: "#F6F3FC", // Light purple border
          }}
        >
          <WeightType
            title="Kg"
            Weight_type={Weight_type}
            setWeight_type={setWeight_type}
          />
          <WeightType
            title="Lbs"
            duration="4 - 6 days"
            Weight_type={Weight_type}
            setWeight_type={setWeight_type}
          />
        </View>
      </View>
      <View>
        <Text style={tw`text-lg font-medium`}>Box it up (Special offer)</Text>
        <FlatList
          data={countries} // ✅ Using sample data
          keyExtractor={(item) => item.id}
          horizontal // ✅ Enables horizontal scrolling
          showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginRight: index !== countries.length - 1 ? 15 : 0,
                width: 150,
                gap: 10,
              }}
            >
              <View
                style={[
                  {
                    width: 150,
                    height: 100,
                    borderColor: item.selected ? "#6246D2" : "#F6F3FC",
                    justifyContent: "center",
                    borderWidth: 1.3,
                    borderRadius: 6,
                  }, // ✅ Space between images
                ]}
              >
                {item.selected && (
                  <LinearGradient
                    colors={["#6246D2", "#CE4FE3"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} // Left to right gradient
                    style={{
                      position: "absolute",
                      top: 13,
                      left: 13,
                      borderRadius: 999,
                      padding: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 18,
                      height: 18,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-bold"
                      size={12}
                      color="white"
                    />
                  </LinearGradient>
                )}
                <View
                  style={{
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <Image
                    style={{ width: item.resolution, height: item.resolution }}
                    source={require("../assets/box.png")}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#6246D2",
                        fontWeight: 600,
                        fontSize: 18,
                      }}
                    >
                      {item.weight}
                    </Text>
                    <Text
                      style={{
                        color: "#A1A0A5",
                        fontWeight: "semibold",
                        fontSize: 15,
                      }}
                    >
                      {item.size}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  justifyContent: "center",
                }}
              >
                <MaskedView
                  maskElement={<Text style={styles.text}>₹ {item.Price}</Text>}
                >
                  <LinearGradient
                    colors={["#6246D2", "#CE4FE3"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} // Left to right
                  >
                    <Text style={[styles.text, { opacity: 0 }]}>
                      ₹ {item.Price}
                    </Text>
                  </LinearGradient>
                </MaskedView>
                <Text
                  style={{
                    color: "#A1A0A5",
                    fontSize: 12,
                    textDecorationLine: "line-through",
                  }}
                >
                  ₹ {item.pastPrice}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Service;

const styles = {
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "black", // Fallback color
  },
};
