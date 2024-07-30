import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

function HomePageServe() {
  return (
    <ScrollView className="w-full h-full  bg-white">
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <View className="w-full h-full py-16">
        <Text className="w-full text-center text-orange-app text-32 font-normal leading-37.5">
          Select server
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/bannerServer.png")}
        />
        <Text className="font-normal text-29 leading-34 w-full text-center text-orange-app">
          Choose a server to enjoy reading stories with Manga Social
        </Text>
        <View className="btn-login w-[full]  mt-10 flex-row justify-center items-center">
          <TouchableOpacity
            className="w-[240px] h-[50px] bg-orange-app rounded-[10px] flex-row items-center justify-center "
            onPress={() => router.replace("/servers/1")}
          >
            <Button title="Choose now" color="#ffffff"></Button>
            <AntDesign name="arrowright" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomePageServe;

const styles = StyleSheet.create({
  image: {
    width: 370,
    height: 416,
  },
});
