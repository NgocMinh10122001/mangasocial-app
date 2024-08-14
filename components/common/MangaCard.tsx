import React from "react";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { IManga } from "@/type";

interface IProps {
  data: IManga;
  height: number | string;
  width: string | number;
}
const { width } = Dimensions.get("window");
function MangaCard(props: IProps) {
  const { data, height, width } = props;
  // console.log("check itme", data);

  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <Image
        source={{
          uri: `${data?.image_poster_link_goc}`,
        }}
        className={`${width} ${height} rounded-lg`}
      />
      <Text className="font-light text-xs">{data?.title_manga}</Text>
      <Text className="font-extralight text-[9px] leading-[10.55px]">
        Chapter: {data?.chapter_new}
      </Text>
      <Text className="font-extralight text-[8px] leading-[10.55px]">
        <FontAwesome name="star" size={9} color="#F3EB2F" /> {5}
      </Text>
    </TouchableOpacity>
  );
}

export default MangaCard;
