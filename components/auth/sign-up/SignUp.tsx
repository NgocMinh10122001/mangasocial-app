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
import { AuthClient } from "@/api/auth/AuthClient";
interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}
function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });
  const loginInstance = new AuthClient();
  const handleLogin = useCallback(async () => {
    const res = await loginInstance.login(form.email, form.password);
    if (res && res.errCode === 200) {
      router.push("/(tabs)");
    } else {
      alert("Your email or password is wrong, please try again!");
    }
  }, [form.email, form.password, form.confirmPassword, form.userName]);

  const handleSubmit = (name: string) => {
    router.push("/");
  };
  return (
    <SafeAreaView className="bg-black">
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle={"light-content"} />
        <View className="login-container  w-full h-full font-sans mt-4 ">
          <Text className="text-white font-medium text-[32px] leading-[37.5px] text-center w-full">
            Sign up
          </Text>
          <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full mt-6">
            You can sign up with your account
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
              title="UserName"
              placeholder="Enter email or phone number"
              value={form.userName}
              handleChangeText={(e: string) =>
                setForm({ ...form, userName: e })
              }
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
            <FormField
              title="Password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              handleChangeText={(e: string) =>
                setForm({ ...form, confirmPassword: e })
              }
              otherStyle={""}
              keyboardType={"email-address"}
            />
          </View>

          <CustomBtn
            handlePress={() => {}}
            textStyle={"text-white"}
            isLoading={true}
            containerStyles={"mt-8"}
            title="Sign Up"
          />
          <Text className="font-normal text-[20px] leading-[23.44px] mb-4 text-white w-full text-center mt-32">
            Already have an account?{" "}
            <Text
              onPress={() => handleSubmit("login")}
              className="text-orange-app"
            >
              Login here
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
