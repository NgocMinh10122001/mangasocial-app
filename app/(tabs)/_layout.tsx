import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 76,
          backgroundColor: "#ED6119",

          borderRadius: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Text className="text-white">Home</Text>
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tabs.Screen
        name="genres"
        options={{
          // title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Text className="text-white">Genre</Text>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="incoming"
        options={{
          // title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Text className="text-white">Incoming</Text>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          // title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Text className="text-white">Rank</Text>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          // title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Text className="text-white">Account</Text>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
