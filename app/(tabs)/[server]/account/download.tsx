import Account from "@/components/account/Account";
import Downloaded from "@/components/account/download/Downloaded";
import History from "@/components/account/history/History";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const ios = Platform.OS === "ios";
export default function AccountScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={`  h-full ${ios ? "mt-0" : "mt-3"} bg-white`}
    >
      {/* px-16.43px */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="h-full  px-[28.43px] "
      >
        <Downloaded />
      </ScrollView>
    </SafeAreaView>
  );
}
