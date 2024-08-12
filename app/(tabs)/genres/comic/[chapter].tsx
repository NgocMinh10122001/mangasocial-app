import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import ReadComic from "@/components/comic/ReadComic";

const ReadChapter = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className={`  h-full  bg-white`}>
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

export default ReadChapter;
