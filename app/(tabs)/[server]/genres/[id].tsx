import { SafeAreaView, StatusBar, ScrollView, Platform } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import GenreDetail from "@/components/genres/genre-detail/GenreDetail";
const ios = Platform.OS === "ios";
const GenreDetailPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className={` h-full ${ios ? "mt-0" : "mt-3"} bg-white`}
    >
      <StatusBar
        animated={true}
        backgroundColor={"#000"}
        barStyle={"dark-content"}
      />
      <ScrollView className="h-full w-full  px-[28.43px] ">
        <GenreDetail id={id} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenreDetailPage;
