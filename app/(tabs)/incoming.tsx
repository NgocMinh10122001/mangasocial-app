import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import HomeScreens from "@/components/screens/HomeScreens";
import Incoming from "@/components/incoming/Incoming";

const ios = Platform.OS === "ios";
export default function IncomingScreen() {
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
      <ScrollView className="h-full  px-[28.43px] pt-[17.17px] font-[Satisfy]">
        <Incoming></Incoming>
      </ScrollView>
    </SafeAreaView>
  );
}
