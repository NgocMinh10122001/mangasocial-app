import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Account",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pf/index"
        options={{
          title: "Account Detail",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
