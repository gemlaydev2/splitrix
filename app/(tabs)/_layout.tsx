import { Link, Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";
import {
  Atom,
  AudioWaveform,
  Contact,
  Home,
  Image,
  User,
} from "@tamagui/lucide-icons";
import CustomTabBar from "components/CustomTabBar";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          headerShown: false,
          title: "Friends",
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          title: "Activity",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
