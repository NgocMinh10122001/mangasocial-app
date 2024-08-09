import { IMangaDetail } from "@/type";
import React from "react";
import { StyleSheet, View } from "react-native";
import FlatlistCustom from "../common/custom/FlatlistCustom";
import TitleCustomOrange from "../common/custom/TitleCustomOrange";
interface IProps {
  data: IMangaDetail[];
  title: string;
  showTitle: boolean;
}
function NewRealse(props: IProps) {
  const { title, showTitle, data } = props;

  return (
    <View className="mt-3 w-full font-sans">
      <TitleCustomOrange title={title} showTitle={showTitle} />
      <FlatlistCustom
        data={data}
        styleContainer={"mt-4"}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        horizontal={false}
        numColumns={4}
        scrollEnable={false}
        styleItem={{ width: "w-full", height: "h-[112px]" }}
      />
    </View>
  );
}

export default NewRealse;

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 10,
  },
  columnWrapperStyle: {
    gap: 10,
  },
});
