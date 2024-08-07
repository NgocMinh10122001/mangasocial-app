import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import CustomBtn from "../common/custom/CustomBtn";
function ForgotPassword() {
  const [forgotpassword, setForgotPassword] = useState<string>("");

  const handleSubmit = (name: string) => {};
  return (
    <SafeAreaView className="bg-black">
      <ScrollView className="w-full h-full ">
        <StatusBar barStyle={"light-content"} />
        <View className="login-container  w-full h-full font-sans mt-12  ">
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
            <View className="input w-full gap-5 mt-6 items-center flex-row justify-center">
              <TextInput
                onChangeText={setForgotPassword}
                value={forgotpassword}
                className={` max-w-[370px] w-[70px] h-[72px] bg-white text-black rounded-[10px] px-4`}
              />
              <TextInput
                onChangeText={setForgotPassword}
                value={forgotpassword}
                className={` max-w-[370px] w-[70px] h-[72px] bg-white text-black rounded-[10px] px-4`}
              />
              <TextInput
                onChangeText={setForgotPassword}
                value={forgotpassword}
                className={` max-w-[370px] w-[70px] h-[72px] bg-white text-black rounded-[10px] px-4`}
              />
              <TextInput
                onChangeText={setForgotPassword}
                value={forgotpassword}
                className={` max-w-[370px] w-[70px] h-[72px] bg-white text-black rounded-[10px] px-4`}
              />
            </View>
            <CustomBtn
              handlePress={() => {}}
              textStyle={"text-white"}
              isLoading={true}
              containerStyles={"mt-8"}
              title="Next"
            />
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
    </SafeAreaView>
  );
}

export default ForgotPassword;
