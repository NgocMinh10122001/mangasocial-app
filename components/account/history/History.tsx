import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import FlatlistCustomRow from "@/components/common/custom/FlatlistCustomRow";
import { mangasFake } from "@/type/fakedata";

const History = () => {
  return (
    <View className="pb-14">
      <View className=" w-full  flex-row justify-between items-center ">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row gap-2 items-center"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="text-orange-app  font-normal leading-[34.09px]  text-[29px]">
            History
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>
      <View className=" max-w-[60%] flex-row items-center justify-between my-5 px-2 py-4 border-[1px] border-orange-app rounded-lg">
        <View>
          <Text className="text-orange-app text-xs">
            01/06/2024 - 01/06/2024
          </Text>
        </View>
        <View>
          <FontAwesome name="birthday-cake" size={14} color="black" />
        </View>
      </View>
      <FlatlistCustomRow
        showEvaluate={false}
        data={mangasFake}
        itemRender={false}
        showContinue={true}
        showNumberOfRead={false}
      />
      <TouchableOpacity className="w-full flex-row justify-center">
        <Text style={styles.seeMore}>Xem thêm »</Text>
      </TouchableOpacity>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  seeMore: {
    color: "orange",
    textAlign: "right",
    marginTop: 8,
  },
});
