import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface IProps {
  title: string;
  handlePress: any;
  containerStyles: string;
  textStyle: string;
  isLoading: boolean;
}
const CustomBtn = (props: IProps) => {
  const { title, handlePress, containerStyles, textStyle, isLoading } = props;
  return (
    <View className={`w-full items-center ${containerStyles}`}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={` w-[239px] h-[54px] bg-orange-app rounded-[10px] flex-row items-center justify-center`}
      >
        <Text className={`${textStyle} font-normal text-xl leading-23.44`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
