import { MangaClient } from "@/api/manga/MangaClient";
import { IManga, IMangaDetail } from "@/type";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import FlatlistCustom from "../common/custom/FlatlistCustom";
import TitleCustomOrange from "../common/custom/TitleCustomOrange";
interface IProps {
  data: IMangaDetail[];
  title: string;
  showTitle: boolean;
  sv: string | number | string[];
  type: string;
}
function NewRealse(props: IProps) {
  const { title, showTitle, data, sv, type } = props;
  const [mangas, setMangas] = useState<IManga[]>();
  const mangaInstance = new MangaClient();
  const getManga = async () => {
    const res = await mangaInstance.fetchAllManga(sv, type, "");
    setMangas(res);
  };
  useEffect(() => {
    getManga();
  }, [sv]);

  return (
    <View className="mt-3 w-full font-sans">
      <TitleCustomOrange title={title} showTitle={showTitle} />
      <FlatlistCustom
        data={mangas}
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
