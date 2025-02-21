import React, { createContext, useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import CourierScreen from "./Layouts/CourierScreen";
import HomeScreen from "./Layouts/HomeScreen";
import TrackScreen from "./Layouts/TrackScreen";
import Login from "./Login";
import Otp from "./Otp";
import Signup from "./Signup";
import Restricteditems from "./Layouts/Restricteditems";
import Termsandcondition from "./Termsandcondition";
import Profile from "./Profile";
import Editprofile from "./Editprofile";
import Homeaddress from "./Homeaddress";
import Entercomplete from "./Entercomplete";
import Notification from "./Notification";
import Trackingpage from "./Trackingpage";
import SuccessScreen from "./Layouts/SuccessScreen";
import Courierpickupdetails from "./Courierpickupdetails";
import Pickupmap from "./Pickupmap";

const Stack = createStackNavigator();

// 📌 Create Authentication Context
const AuthContext = createContext();

// 🔥 AuthProvider to Manage Global Auth State
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Check login state from AsyncStorage
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoggedIn(!!token);
    };
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🚀 Use Auth Hook for easy access
const useAuth = () => useContext(AuthContext);

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Pickupmap" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            <Stack.Screen
              name="Termsandcondition"
              component={Termsandcondition}
            />
            <Stack.Screen name="Courier" component={CourierScreen} />
            <Stack.Screen name="Track" component={TrackScreen} />
            <Stack.Screen name="Restricteditems" component={Restricteditems} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Editprofile" component={Editprofile} />
            <Stack.Screen name="Homeaddress" component={Homeaddress} />
            <Stack.Screen name="Entercomplete" component={Entercomplete} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Trackingpage" component={Trackingpage} />
            <Stack.Screen name="Pickupmap" component={Pickupmap}/>
            <Stack.Screen
              name="Courierpickupdetails"
              component={Courierpickupdetails}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Otp" component={Otp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// ✅ Main App Component
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
