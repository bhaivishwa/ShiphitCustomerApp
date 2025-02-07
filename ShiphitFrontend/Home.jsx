import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // ✅ Import Stack Navigator
import { NavigationContainer } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import HomeScreen from "./Layouts/HomeScreen";
import CourierScreen from "./Layouts/CourierScreen";
import TrackScreen from "./Layouts/TrackScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 3;

// Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // ✅ Create Stack Navigator

// Custom Tab Bar Button
const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      activeOpacity={0.8}
      style={tw`flex-1 items-center justify-center`}
    >
      {children}
    </TouchableOpacity>
  );
};

// Custom Tab Icon
const TabIcon = ({ focused, icon, label }) => {
  return (
    <View style={[tw`items-center`, { minWidth: 60 }]}>
      {icon}
      <Text
        style={[
          tw`font-bold mt-1`,
          { fontSize: 16, color: focused ? "#914ADA" : "#60606C" },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

// Bottom Tabs Component
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: "slide_from_right",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          height: 80,
          backgroundColor: "#FFFFFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Entypo
                  name="home"
                  size={28}
                  color={focused ? "#914ADA" : "#60606C"}
                />
              }
              label="Home"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Courier"
        component={CourierScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Entypo
                  name="box"
                  size={28}
                  color={focused ? "#914ADA" : "#60606C"}
                />
              }
              label="Courier"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Track"
        component={TrackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <MaterialIcons
                  name="track-changes"
                  size={28}
                  color={focused ? "#914ADA" : "#60606C"}
                />
              }
              label="Track"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Component with Stack Navigation
export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={["top", "bottom"]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{ headerShown: false, animation: "slide_from_right" }} // ✅ Enables left-to-right transition
        >
          <Stack.Screen name="Tabs" component={BottomTabs} />
          <Stack.Screen name="CourierScreen" component={CourierScreen} />
          <Stack.Screen name="TrackScreen" component={TrackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
