import React, { useCallback, useState } from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { FontAwesome5, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSignup, setIsSignUp] = useState<boolean>(false);

  const router = useRouter();
  const handelRedirect = useCallback(() => {
    () => {
      router.replace("/(tabs)/");
    };
  }, []);
  const handleSubmit = (name: string) => {
    if (name === "signup") {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  };
  return (
    <ScrollView className="w-full h-full bg-black">
      <StatusBar barStyle={"light-content"} />
      <View className="login-container  w-full h-full font-sans pt-11 ">
        <Text className="text-white font-medium text-[32px] leading-[37.5px] text-center w-full">
          Log in
        </Text>
        <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full mt-6">
          You can log in with your account
        </Text>
        <Text className="text-white text-[22px] leading-[25.78px] font-light text-center w-full ">
          social network
        </Text>
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
        <View className="line flex-row items-center justify-center gap-[13px] mt-6">
          <View className="h-[1px] w-full bg-[#FFFFFF87] text-xl"></View>
          <View>
            <Text className="text-[#FFFFFF87] text-xl font-normal text-[22px] leading-[25.78px]">
              Hoặc tiếp tục với
            </Text>
          </View>
          <View className="h-[1px] w-full bg-[#FFFFFF87] text-xl"></View>
        </View>
        <View className="input gap-5 mt-6 items-center">
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter email or phone number "
            className="max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] px-4"
          />
          <TextInput
            onChangeText={setUserName}
            value={userName}
            placeholder="User"
            className="max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] px-4"
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            className={`${
              isSignup === false && "hidden"
            } max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] px-4`}
          />

          <TextInput
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            className={`${
              isSignup === false && "hidden"
            } max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] px-4`}
          />
        </View>
        <View className="btn-login w-[full]  mt-10 flex-row justify-center items-center">
          <View className="w-[239px] h-[54px] bg-orange-app rounded-[10px] flex-row items-center justify-center">
            <Button
              onPress={handelRedirect}
              title="Log In"
              color="#ffffff"
            ></Button>
          </View>
        </View>
        <Link
          href={"/forgotpass"}
          className="forgot mt-2 text-[20px] font-normal leading-[23px] text-orange-app w-full text-center"
        >
          Forgot Password?
        </Link>
        {isSignup === false && (
          <Text className="font-normal text-[20px] leading-[23.44px] text-white mt-6 w-full text-center">
            By choosing to log in, you agree to MangaSocial Version's{" "}
            <Link href={""} className="text-blue-700">
              terms of use
            </Link>
            and{" "}
            <Link href={""} className="text-blue-700">
              privacy policy
            </Link>
          </Text>
        )}
        {isSignup ? (
          <Text className="font-normal text-[20px] leading-[23.44px] mb-4 text-white w-full text-center mt-36">
            Already have an account?{" "}
            <Text
              onPress={() => handleSubmit("login")}
              className="text-orange-app"
            >
              Login here
            </Text>
          </Text>
        ) : (
          <Text className="font-normal text-[20px] leading-[23.44px] mb-4 text-white w-full text-center mt-36">
            Do not have an account?{" "}
            <Text
              onPress={() => handleSubmit("signup")}
              className="text-orange-app"
            >
              Sign Up
            </Text>
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

export default Login;
