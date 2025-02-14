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
import Restricteditems from "./Layouts/Restricteditems";
import Termsandcondition from "./Termsandcondition";
import Profile from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import SuccessScreen from "./Layouts/SuccessScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Courier"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courier" component={CourierScreen} />
        <Stack.Screen
          name="Courierpickupdetails"
          component={Courierpickupdetails}
        />
        <Stack.Screen name="Track" component={TrackScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="Restricteditems" component={Restricteditems} />
        <Stack.Screen name="Termsandcondition" component={Termsandcondition} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
