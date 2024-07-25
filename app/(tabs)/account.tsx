import Login from "@/components/login/Login";
import HomeScreens from "@/components/screens/HomeScreens";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const ios = Platform.OS === "ios";
export default function AccountScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={`bg-white  h-full ${ios ? "mt-0" : "mt-3"} `}
    >
      {/* px-16.43px */}
      <View className="h-full  px-[28.43px] pt-[17.17px] ">
        <HomeScreens />
      </View>
    </SafeAreaView>
  );
}
