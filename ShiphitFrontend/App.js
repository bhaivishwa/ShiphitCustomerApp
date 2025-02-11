import { View } from "react-native";
import Login from "./Login";
import Otp from "./Otp";
import Courier from "./Courier";
import Signup from "./Signup";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Courier"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Courier" component={Courier}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
