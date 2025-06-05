import { Button, Text, YStack } from "tamagui";
import { useRouter } from "expo-router";
import HomeScreen from "screens/HomeScreen";

export default function TabOneScreen() {
  const router = useRouter();

  return <YStack flex={1} bg={"#1e1e1e"} >
    <HomeScreen/>
  </YStack>;
}
