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
import FormField from "../common/custom/FormField";
import CustomBtn from "../common/custom/CustomBtn";
interface IForm {
  email: string;
}
function ForgotPassword() {
  const [form, setForm] = useState<IForm>({
    email: "",
  });

  const handleSubmit = (name: string) => {};
  return (
    <SafeAreaView className="bg-black">
      <ScrollView className="w-full h-full  mt-12">
        <StatusBar barStyle={"light-content"} />
        <View className="login-container  w-full h-full font-sans  ">
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
            <FormField
              title="Email"
              placeholder="Enter email or phone number"
              value={form.email}
              handleChangeText={(e: string) => setForm({ ...form, email: e })}
              otherStyle={""}
              keyboardType={"email-address"}
            />
            <CustomBtn
              handlePress={() => router.push("auth/forgotpassconfirm")}
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
