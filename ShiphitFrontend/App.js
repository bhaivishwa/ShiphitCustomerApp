import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";
import CourierScreen from "./Layouts/CourierScreen";
import HomeScreen from "./Layouts/HomeScreen";
import TrackScreen from "./Layouts/TrackScreen";
import Login from "./Login";
import Otp from "./Otp";
import Courierpickupdetails from "./Courierpickupdetails";
import Signup from "./Signup";
import Restricteditems from "./Restricteditems";
import Termsandcondition from "./Termsandcondition";
import Profile from "./Profile";
import Editprofile from "./Editprofile";
import Homeaddress from "./Homeaddress";
import Entercomplete from "./Entercomplete";
import Notification from "./Notification";
import Trackingpage from "./Trackingpage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SuccessScreen from "./Layouts/SuccessScreen";

export default function App() {
  const Stack = createStackNavigator();
  return true ? ( // ✅ Correct JSX syntax for conditional rendering
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Courierpickupdetails"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Courierpickupdetails"
            component={Courierpickupdetails}
          />
          <Stack.Screen name="restricteditems" component={Restricteditems} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Courier" component={CourierScreen} />
          <Stack.Screen name="Track" component={TrackScreen} />
          <Stack.Screen name="Restricteditems" component={Restricteditems} />
          <Stack.Screen
            name="Termsandcondition"
            component={Termsandcondition}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="Homeaddress" component={Homeaddress} />
          <Stack.Screen name="Entercomplete" component={Entercomplete} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Trackingpage" component={Trackingpage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
