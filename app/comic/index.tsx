import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import ComicDetail from "@/components/comic/ComicDetail";
import ReadComic from "@/components/comic/ReadComic";

const Comic = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className={`  h-full  bg-f8`}>
      <StatusBar
        animated={true}
        backgroundColor={"#000"}
        barStyle={"dark-content"}
      />
      <ScrollView className="h-full  px-[28.43px] ">
        <ReadComic />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Comic;
