import ProfileScreen from "screens/ProfileScreen";
import { Text, View, YStack } from "tamagui";

export default function TabFourScreen() {
  return (
    <YStack borderWidth={1} flex={1}  bg="#1e1e1e" borderColor={"red"}>
      <ProfileScreen />
    </YStack>
  );
}
