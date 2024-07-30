import React from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const servers: any[] = [
  {
    name: "Sever 1",
    sv: 1,
  },
  {
    name: "Sever 2",
    sv: 2,
  },
  {
    name: "Sever 3",
    sv: 3,
  },
  {
    name: "Sever 4",
    sv: 4,
  },
  {
    name: "Sever 5",
    sv: 5,
  },
  {
    name: "Sever 6",
    sv: 6,
  },
  {
    name: "Sever 7",
    sv: 7,
  },
  {
    name: "Sever 8",
    sv: 8,
  },
  {
    name: "Sever 9",
    sv: 9,
  },
  {
    name: "Sever 10",
    sv: 10,
  },
  {
    name: "Sever 11",
    sv: 11,
  },
  {
    name: "Sever 12",
    sv: 12,
  },
];

function Servers() {
  return (
    <View className="w-full h-full ">
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <View className="w-full h-full py-16 px-28.5">
        <Text className="w-full text-center text-orange-app text-32 font-normal  leading-37.5">
          Select server
        </Text>
        <View className="w-240 h-54 bg-orange-app rounded-20 flex-row items-center mt-11 px-2">
          <View className="w-125 h-46 bg-white rounded-20 flex-row items-center">
            <Text className="text-orange-app font-normal text-base w-full text-center leading-18.75">
              Word story
            </Text>
          </View>
          <View className="w-125 h-46  rounded-20 flex-row items-center">
            <Text className="text-white font-normal w-full text-center text-base leading-18.75">
              Comic
            </Text>
          </View>
        </View>
        <FlatList
          scrollEnabled={false}
          className="mt-6 flex-1"
          data={servers || []}
          numColumns={2}
          columnWrapperStyle={{ gap: 20 }}
          contentContainerStyle={{ gap: 20 }}
          keyExtractor={(item, index) => item.name + index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-row justify-between px-2 items-center bg-white border-[1px] border-orange-app rounded-10 flex-1 h-[42px]">
              <View className=" w-[30px] h-[30px] relative  ">
                <Image
                  source={require("../../assets/images/server.png")}
                  alt=""
                  className="w-full h-full"
                ></Image>
                <View className="absolute block bg-orange-app rounded-full w-[10px] h-[10px] -bottom-1 -right-1"></View>
              </View>
              <Text className="text-orange-app  px-2 text-lg !leading-5">
                {item.name}
              </Text>
              <AntDesign name="check" size={24} color="#ed6119" />
            </TouchableOpacity>
          )}
        ></FlatList>
        <View className="btn-login w-[full]  mt-10 flex-row justify-center items-center">
          <TouchableOpacity
            className="w-[240px] h-[50px] bg-orange-app rounded-[10px] flex-row items-center justify-center "
            onPress={() => router.replace("/servers/1")}
          >
            <Button title="Experience now" color="#ffffff"></Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Servers;
