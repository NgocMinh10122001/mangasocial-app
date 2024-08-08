import React, { useCallback, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import CustomBtn from "../../common/custom/CustomBtn";
import CustomLoginLogo from "../../common/custom/CustomLoginLogo";
import FormField from "../../common/custom/FormField";
interface IForm {
  email: string;
  password: string;
}
function Login() {
  const router = useRouter();
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });

  const handleSubmit = (name: string) => {
    router.push("auth/signup");
  };
  return (
    <SafeAreaView className="bg-black">
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle={"light-content"} />
        <View className="login-container  w-full h-full font-sans mt-12 ">
          <Text className="text-white font-medium text-[32px] leading-[37.5px] text-center w-full">
            Log in
          </Text>
          <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full mt-6">
            You can log in with your account
          </Text>
          <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full ">
            social network
          </Text>
          <CustomLoginLogo />
          <View className="line flex-row items-center justify-center gap-[13px] mt-6">
            <View className="h-[1px] w-full bg-[#FFFFFF87] text-xl"></View>
            <View>
              <Text className="text-[#FFFFFF87] text-xl font-normal text-[22px] leading-[25.78px]">
                Hoặc tiếp tục với
              </Text>
            </View>
            <View className="h-[1px] w-full bg-[#FFFFFF87] text-xl"></View>
          </View>
          <View
            className=" mt-8 items-center "
            style={{
              gap: 20,
            }}
          >
            <FormField
              title="Email"
              placeholder="Enter email or phone number"
              value={form.email}
              handleChangeText={(e: string) => setForm({ ...form, email: e })}
              otherStyle={""}
              keyboardType={"email-address"}
            />
            <FormField
              title="Password"
              placeholder="Password"
              value={form.password}
              handleChangeText={(e: string) =>
                setForm({ ...form, password: e })
              }
              otherStyle={""}
              keyboardType={"email-address"}
            />
          </View>

          <CustomBtn
            handlePress={() => router.push("/(tabs)/")}
            textStyle={"text-white"}
            isLoading={true}
            containerStyles={"mt-8"}
            title="Login"
          />
          <Link
            href={"auth/forgotpass"}
            className="forgot mt-2 text-[20px] font-normal leading-[23px] text-orange-app w-full text-center"
          >
            Forgot Password?
          </Link>

          <Text className="font-normal px-7 text-[20px] leading-[23.44px] text-white mt-6 w-full text-center">
            By choosing to log in, you agree to MangaSocial Version's{" "}
            <Link href={""} className="text-blue-700">
              terms of use
            </Link>{" "}
            and{" "}
            <Link href={""} className="text-blue-700">
              privacy policy
            </Link>
          </Text>

          <Text className="font-normal text-[20px] leading-[23.44px] mb-4 text-white w-full text-center mt-36">
            Do not have an account?{" "}
            <Text
              onPress={() => handleSubmit("signup")}
              className="text-orange-app"
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
