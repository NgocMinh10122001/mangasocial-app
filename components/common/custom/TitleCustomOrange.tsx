import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

interface IProps {
  title: string;
  showTitle: boolean;
}
const TitleCustomOrange = (props: IProps) => {
  const { title, showTitle } = props;
  return (
    <View>
      <View
        className={`w-[76px] h-[7px] ${
          showTitle === false ? "mb-1" : "mb-[2px]"
        } rounded-[5px] bg-orange-app`}
      ></View>
      {showTitle && (
        <View className={`flex-row items-center ${showTitle && "mb-1"}`}>
          <Text className="font-normal text-lg !leading-[21.09px]">
            {title}
          </Text>
          <Entypo
            name="chevron-thin-right"
            className="w-[5.5px] h-[11px]"
            color="#222222"
          />
        </View>
      )}
    </View>
  );
};

export default TitleCustomOrange;
