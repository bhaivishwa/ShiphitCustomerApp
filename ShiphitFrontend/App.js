import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames"; // Import Tailwind helper

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-red-600 font-extrabold text-lg`}>
        testtesttesttesttesttesttesttesttest
      </Text>
    </View>
  );
}
