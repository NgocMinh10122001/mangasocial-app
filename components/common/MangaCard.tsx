import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IManga {
  id: string;
  thumbNail: string;
  chapter: string;
  title: string;
  rate: string;
}
interface IProps {
  data: IManga | any;
}
const { width, height } = Dimensions.get("window");
function MangaCard(props: IProps) {
  const { data } = props;
  return (
    <View>
      <Image
        source={{
          uri: `${data?.thumbnail}`,
        }}
        style={{ width: width * 0.2, height: 98 }}
        className="rounded-lg"
      />
      <Text className="font-light text-xs">{data?.title}</Text>
      <Text className="font-extralight text-[9px] leading-[10.55px]">
        Chapter: {data?.chapterNew}
      </Text>
      <Text className="font-extralight text-[8px] leading-[10.55px]">
        <FontAwesome name="star" size={9} color="#F3EB2F" /> {data?.rate}
      </Text>
    </View>
  );
}

export default MangaCard;
