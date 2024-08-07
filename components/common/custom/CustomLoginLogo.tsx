import { View } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

const CustomLoginLogo = () => {
  return (
    <View className="logos flex-row  justify-evenly items-center mt-6 ">
      <View className="bg-white w-[64px] h-[64px] flex-row justify-center items-center rounded-full">
        <FontAwesome5 name="facebook" size={30} color="blue" />
      </View>
      <View className="bg-white w-[64px] h-[64px] flex-row justify-center items-center rounded-full">
        <FontAwesome name="google" size={30} color="red" />
      </View>
      <View className="bg-white w-[64px] h-[64px] flex-row justify-center items-center rounded-full">
        <FontAwesome6 name="apple" size={30} color="black" />
      </View>
    </View>
  );
};

export default CustomLoginLogo;
