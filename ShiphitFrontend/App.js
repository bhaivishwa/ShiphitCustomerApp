import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";
import CourierScreen from "./Layouts/CourierScreen";
import HomeScreen from "./Layouts/HomeScreen";
import TrackScreen from "./Layouts/TrackScreen";
import Login from "./Login";
import Otp from "./Otp";
import { NavigationContainer } from "@react-navigation/native";
import Courierpickupdetails from "./Courierpickupdetails";
import Signup from "./Signup";
import Restricteditems from "./Restricteditems";
import Termsandcondition from "./Termsandcondition";
import Profile from "./Profile";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SuccessScreen from "./Layouts/SuccessScreen";

export default function App() {
  const Stack = createStackNavigator();
  return false ? ( // ✅ Correct JSX syntax for conditional rendering
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, animation: "slide_from_right" }} // ✅ Enables left-to-right transition
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Courier" component={CourierScreen} />
          <Stack.Screen
            name="Courierpickupdetails"
            component={Courierpickupdetails}
          />
          <Stack.Screen name="Track" component={TrackScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
          <Stack.Screen name="Restricteditems" component={Restricteditems} />
          <Stack.Screen
            name="Termsandcondition"
            component={Termsandcondition}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
