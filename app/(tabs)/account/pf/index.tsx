import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AccountInformation from "@/components/account/pf/AccountInformation";

const ios = Platform.OS === "ios";
export default function index() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={`  h-full ${ios ? "mt-0" : "mt-3"} `}
    >
      {/* px-16.43px */}
      <View className="h-full  px-[28.43px] pt-[17.17px] ">
        <AccountInformation />
      </View>
    </SafeAreaView>
  );
}
