import React from "react";
import {
  Button,
  Input,
  Separator,
  Text,
  YStack,
  XStack,
  Stack,
  Label,
  Image,
} from "tamagui";
import { useRouter } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

const index = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Fake sign-in → navigate to tabs
    router.push("/(tabs)");
  };

  return (
    <YStack
      px={40}
      py={60}
      bg="#1e1e1e"
      flex={1}
      justify="center"
    >
      <SigninForm onSignIn={handleSignIn} />
    </YStack>
  );
};

export default index;

function SigninForm({ onSignIn }: { onSignIn: () => void }) {
  const colorScheme = useColorScheme();
  return (
    <YStack width="100%" gap={"$3"} alignItems="center">
      <YStack
        justify={"center"}
        items={"center"}
        borderWidth={1}
        borderColor={"white"}
        mb={40}
      >
        <Text color={"#fff"}>Welcome to</Text>

        <Text style={styles.text} color={"#FFC23F"} fontSize="$10">
          SPLITRIX
        </Text>
        <Text color={"#fff"}>Easily split bills & track your expenses</Text>
      </YStack>

      <YStack width={"100%"} borderWidth={1} borderColor={"red"}>
        <YStack>
          <Label p={"$0"} color={"white"} htmlFor="email">
            Email
          </Label>
          <Input
            size="$4"
            bg={"transparent"}
            placeholder="Email"
            width="100%"
          />
        </YStack>
        <YStack>
          <Label color={"white"} htmlFor="password">
            Password
          </Label>
          <Input
            size="$4"
            bg={"transparent"}
            placeholder="Password"
            secureTextEntry
            width="100%"
          />
        </YStack>
      </YStack>

      <XStack width="100%" justifyContent="flex-end">
        <Text color="#3BB154" fontSize="$2" fontWeight="500">
          Forgot password?
        </Text>
      </XStack>

      <Button
        width="100%"
        backgroundColor={"#FFC23F"}
        size="$4"
        onPress={onSignIn}
      >
        Sign In
      </Button>

      <XStack justify={"center"} items={"center"} gap={10}>
        <Stack
          borderWidth={0.5}
          borderStyle="dotted"
          flex={1}
          borderColor={"#fff"}
        ></Stack>
        <Text color={"#fff"}>OR</Text>
        <Stack
          borderWidth={0.5}
          flex={1}
          borderStyle="dotted"
          borderColor={"#fff"}
        ></Stack>
      </XStack>

      <Button width="100%" size="$4" theme="blue" icon={<GoogleIcon />}>
        Sign in with Google
      </Button>
    </YStack>
  );
}

function GoogleIcon() {
  return (
    <Image
      source={{ uri: "https://img.icons8.com/fluency/48/google-logo.png" }}
      width={25}
      height={25}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Neon",
  },
});
