import { View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function SearchManga() {
  const [text, onChangeText] = React.useState("Search");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View className="rounded-[7px] bg-[#DADADA] w-full h-[33px] flex-row  items-center px-1">
      <EvilIcons name="search" size={20} color="#222222" />
      <TextInput
        onChangeText={onChangeText}
        value={""}
        placeholder="Search"
        className="   font-normal text-base !leading-[18.75px] outline-none"
      />
    </View>
  );
}

export default SearchManga;
