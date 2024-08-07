import Account from "@/components/account/Account";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const ios = Platform.OS === "ios";
export default function AccountScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={`  h-full ${ios ? "mt-0" : "mt-3"} bg-f8`}
    >
      {/* px-16.43px */}
      <View className="h-full  px-[28.43px] ">
        <Account />
      </View>
    </SafeAreaView>
  );
}
