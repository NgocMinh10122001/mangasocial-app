import { Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Svg, { Path } from "react-native-svg";

import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface INavBar {
  name: string;
  title: string;
  dis: string;
}
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const dataNavbar: INavBar[] = [
  {
    name: "index",
    title: "Home",
    dis: "translate-x-0",
  },
  {
    name: "genres",
    title: "Genre",
    dis: "translate-x-12",
  },
  {
    name: "incoming",
    title: "Incoming",
    dis: "translate-x-2",
  },
  {
    name: "rank",
    title: "Rank",
    dis: "translate-x-0",
  },
  {
    name: "account",
    title: "Account",
    dis: "translate-x-0",
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [active, setActive] = useState<number | string>(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 76,
          backgroundColor: "#ed6119",
          shadowColor: "#ed6119",
          shadowOpacity: 1,
          shadowOffset: { width: 0, height: 0 },
          borderRadius: 5,
          gap: 0,
        },
      }}
    >
      {dataNavbar &&
        dataNavbar.length > 0 &&
        dataNavbar.map((item, index) => (
          <Tabs.Screen
            key={index}
            name={`${item?.name}`}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Animated.View
                  className={`  h-[62px] w-[62px] flex-row justify-center items-center relative !z-10 ${
                    active === index && ""
                  }`}
                  onTouchStart={() => {
                    setActive(index);
                  }}
                >
                  {active === index && (
                    <AnimatedSvg
                      viewBox="0 0 110 60"
                      style={[styles.activeBackground]}
                      className="absolute w-[120px] h-[100px] -top-[15.5%] !z-0 "
                    >
                      <Path
                        fill="#ffffff"
                        d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
                      />
                    </AnimatedSvg>
                  )}
                  <View
                    className={` bg-orange-app rounded-full  flex-row justify-center items-center  relative !z-10 ${
                      active === index && ` h-full w-full`
                    } `}
                    style={[styles.shadow]}
                  >
                    <Text className="text-white absolute z-[9999]">
                      {item?.title}
                    </Text>
                  </View>
                </Animated.View>
              ),
              tabBarShowLabel: false,
            }}
          />
        ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeBackground: {
    position: "absolute",
  },
  shadow: {
    shadowColor: "#ed6119",
    shadowOpacity: 1,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
  },
});
