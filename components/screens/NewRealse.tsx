import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import MangaCard from "../common/MangaCard";
interface IData {
  id: string;
  title: string;
  thumbnail: string;
  chapter: string;
  urlManga: string;
  urlChapter: string;
  chapterNew: string;
  rate: string;
}
interface IProps {
  data: IData[];
  title: string;
}
function NewRealse(props: IProps) {
  const { title } = props;
  const mangas: IData[] = [
    {
      id: "0",
      title: "Briar",
      thumbnail:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",

      chapter: "21",
      urlManga: "",
      urlChapter: "",
      chapterNew: "22",
      rate: "5",
    },
    {
      id: "1",
      title: "Briar",
      thumbnail:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",

      chapter: "21",
      urlManga: "",
      urlChapter: "",
      chapterNew: "22",
      rate: "5",
    },
    {
      id: "2",
      title: "Briar",
      thumbnail:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",

      chapter: "21",
      urlManga: "",
      urlChapter: "",
      chapterNew: "22",
      rate: "5",
    },
    {
      id: "3",
      title: "Briar",
      thumbnail:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",

      chapter: "21",
      urlManga: "",
      urlChapter: "",
      chapterNew: "22",
      rate: "5",
    },
  ];
  return (
    <View className="mt-3 w-full font-sans">
      <View className="w-[76px] h-[7px] rounded-[5px] bg-orange-app"></View>
      <View className="flex-row items-center ">
        <Text className="font-normal text-lg !leading-[21.09px]">{title}</Text>
        <Entypo
          name="chevron-thin-right"
          className="w-[5.5px] h-[11px]"
          color="#222222"
        />
      </View>
      <FlatList
        style={{ flex: 1, marginTop: 4 }}
        scrollEnabled={false}
        numColumns={4}
        horizontal={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={mangas}
        renderItem={({ item }) => <MangaCard data={item} height={112} />}
        className="content"
      ></FlatList>
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
