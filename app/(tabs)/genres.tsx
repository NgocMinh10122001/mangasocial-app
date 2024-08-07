import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import HomeScreens from "@/components/screens/HomeScreens";
import Genres from "@/components/genres/Genres";

const ios = Platform.OS === "ios";
export default function GenresScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={` h-full ${ios ? "mt-0" : "mt-3"} bg-f8`}
    >
      <StatusBar
        animated={true}
        backgroundColor={"#000"}
        barStyle={"dark-content"}
      />
      <ScrollView className="h-full w-full  px-[28.43px] ">
        <Genres />
      </ScrollView>
    </SafeAreaView>
  );
}
