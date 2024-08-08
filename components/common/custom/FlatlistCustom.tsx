import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MangaCard from "../MangaCard";
import { IData } from "@/type";

interface IProps {
  styleContainer: string;
  scrollEnable: boolean;
  numColumns: number;
  horizontal: boolean;
  contentContainerStyle: any;
  columnWrapperStyle: any;
  data: IData[];
  styleItem: {
    width: string;
    height: string;
  };
}
const FlatlistCustom = (props: IProps) => {
  const {
    styleContainer,
    scrollEnable,
    numColumns,
    horizontal,
    contentContainerStyle,
    columnWrapperStyle,
    data,
    styleItem,
  } = props;
  return (
    <View className="">
      <FlatList
        style={{ flex: 1 }}
        scrollEnabled={scrollEnable}
        numColumns={numColumns}
        horizontal={horizontal}
        contentContainerStyle={contentContainerStyle}
        columnWrapperStyle={columnWrapperStyle}
        data={data}
        renderItem={({ item }) => (
          <MangaCard
            data={item}
            width={styleItem.width}
            height={styleItem.height}
          />
        )}
        className="content"
      ></FlatList>
    </View>
  );
};

export default FlatlistCustom;

const styles = StyleSheet.create({});
