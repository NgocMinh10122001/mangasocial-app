import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
function ForgotPassword() {
  const [forgotpassword, setForgotPassword] = useState<string>("");

  const handleSubmit = (name: string) => {};
  return (
    <ScrollView className="w-full h-full bg-black">
      <StatusBar barStyle={"light-content"} />
      <View className="login-container  w-full h-full font-sans pt-16  ">
        <Text className="text-white font-medium text-[32px] leading-[37.5px] text-center w-full">
          Forgot Password
        </Text>
        <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full mt-2">
          No worries, we’ll send you reset
        </Text>
        <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full ">
          instructions.
        </Text>

        <View className="w-full h-full justify-center items-center">
          <View className="input w-full gap-5 mt-6 items-center">
            <TextInput
              onChangeText={setForgotPassword}
              value={forgotpassword}
              placeholder="Confirm Password"
              className={` max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] px-4`}
            />
          </View>
          <View className="btn-login w-[full]  mt-10 flex-row justify-center items-center">
            <View className="w-[239px] h-[54px] bg-orange-app rounded-[10px] flex-row items-center justify-center">
              <Button
                onPress={() => handleSubmit("")}
                title="Next"
                color="#ffffff"
              ></Button>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="flex-row justify-center gap-4 items-center w-full mt-6"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              className="bg-white"
            />
            <Text className="forgot mt-2 text-sm font-normal  text-white w-fit text-center ">
              Back to log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;
