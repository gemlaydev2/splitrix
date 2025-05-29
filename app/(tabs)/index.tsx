import { Button, Text, YStack } from "tamagui";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <YStack flex={1} bg={"#fff"} items="center" gap="$8" px="$10" pt="$8">
      <Text fontSize={22}> Welcome to splitrix</Text>
      <Button onPress={() => router.push("/login")}>Login</Button>
    </YStack>
  );
}
