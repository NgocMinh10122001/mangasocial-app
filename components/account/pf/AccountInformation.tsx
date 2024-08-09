import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import index from "@/app/(tabs)/account/pf";

interface IUserInfo {
  title: string;
  infor: string;
}
export default function AccountInformation() {
  const data: IUserInfo[] = [
    {
      title: "Account name",
      infor: "ID 123456",
    },
    {
      title: "Sex",
      infor: "Nữ",
    },
    {
      title: "Email",
      infor: "Abcdf@gmail.com",
    },
    {
      title: "Phone number",
      infor: "0987654323",
    },
  ];
  return (
    <View className="pb-16">
      <View className=" w-full  flex-row justify-between items-center ">
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/account")}
          className="flex-row gap-2 items-center"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="text-orange-app  font-normal leading-[34.09px]  text-[29px]">
            Personal information
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
      <View className="user flex-row items-center justify-center py-9 gap-2 ">
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/account/pf")}
          className="user-image rounded-full p-6 bg-orange-app  w-fit h-fit flex-row justify-center items-center"
        >
          <SimpleLineIcons name="user-female" size={37} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1 }}
            className="flex-row justify-start gap-3 mb-3"
          >
            <View style={styles.dropdown} className="bg-orange-app w-[40%] ">
              <Text className="text-white text-xl !leading-[23px] w-full text-center">
                {item?.title}
              </Text>
            </View>
            <View className="justify-center w-full">
              <Text className="font-light text-xl !leading-[23px] w-[80%]">
                {item?.infor}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        className="content "
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 38,

    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});
