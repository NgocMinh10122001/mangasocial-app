import { Platform, SafeAreaView, StatusBar, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import HomeScreens from "@/components/screens/HomeScreens";

const ios = Platform.OS === "ios";
export default function RankScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={`bg-white  h-full ${ios ? "mt-0" : "mt-3"} `}
    >
      <StatusBar
        animated={true}
        backgroundColor={"#000"}
        barStyle={"dark-content"}
      />
      <View className="h-full  px-[28.43px] pt-[17.17px] font-[Satisfy]">
        <HomeScreens></HomeScreens>
      </View>
    </SafeAreaView>
  );
}
