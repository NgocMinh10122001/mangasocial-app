import { Platform, SafeAreaView, StatusBar, View } from "react-native";

import HomeScreens from "@/components/screens/HomeScreens";
import Genres from "@/components/genres/Genres";

const ios = Platform.OS === "ios";
export default function GenresScreen() {
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
      <View className="h-full w-full  px-[28.43px] pt-[17.17px] ">
        <Genres />
      </View>
    </SafeAreaView>
  );
}
