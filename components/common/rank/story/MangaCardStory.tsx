import React from "react";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

interface IManga {
  id: string;
  thumbNail: string;
  chapter: string;
  title: string;
  rate: string;
}
interface IProps {
  data: IManga | any;
  height: number | string;
}
const { width } = Dimensions.get("window");
function MangaCardStory(props: IProps) {
  const { data, height } = props;
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      className="flex-row justify-start gap-3 mb-3"
    >
      <Image
        source={{
          uri: `${data?.thumbnail}`,
        }}
        style={{ width: "24%", height: height as number }}
        className="rounded-lg"
      />
      <View className="justify-center w-full">
        <Text className="font-light text-xs w-[80%]">{data?.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MangaCardStory;
