import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  Entypo,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";

const data: any[] = [
  {
    id: "",
    title: "Personal information",
    svg: <FontAwesome name="user" size={20} color="white" />,
  },
  {
    id: "",
    title: "Change Password",
    svg: <Feather name="key" size={20} color="white" />,
  },
  {
    id: "",
    title: "History",
    svg: <Entypo name="time-slot" size={20} color="white" />,
  },
  {
    id: "",
    title: "Dowload",
    svg: <AntDesign name="download" size={20} color="white" />,
  },
  {
    id: "",
    title: "Evaluate",
    svg: <FontAwesome5 name="pen" size={20} color="white" />,
  },
  {
    id: "",
    title: "Help Center",
    svg: <AntDesign name="questioncircleo" size={20} color="white" />,
  },
  {
    id: "",
    title: "Log out",
    svg: <AntDesign name="poweroff" size={20} color="white" />,
  },
];

export default function Account() {
  return (
    <ScrollView className="pb-16">
      <View className=" w-full  flex-row justify-between items-center ">
        <Text className="text-orange-app  font-normal leading-[46.09px]  text-[32px]">
          Account
        </Text>
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>
      <View className="user flex-row items-center gap-2 relative">
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/account/pf")}
          className="user-image rounded-full p-3 bg-orange-app border-[1px] border-green-300 w-fit h-fit flex-row justify-center items-center"
        >
          <SimpleLineIcons name="user-female" size={22} color="white" />
          <View className="rounded-full bg-white p-[2px] absolute -bottom-[10%] right-0">
            <Ionicons name="add-outline" size={10} color="black" />
          </View>
        </TouchableOpacity>
        <Text className="user-id">ID 123456</Text>
      </View>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dropdown}
            className="bg-orange-app h-[51px]"
          >
            <View className="flex-row items-center gap-2">
              {item?.svg}
              <Text className="text-white">{item?.title}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="white" />
          </TouchableOpacity>
        )}
        className="content mt-2"
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 42,

    borderRadius: 8,
    width: "100%",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});
