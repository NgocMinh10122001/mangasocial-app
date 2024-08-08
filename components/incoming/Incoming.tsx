import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import MangaCard from "../common/MangaCard";
import Pagination from "../common/pagination/Pagination";
import FlatlistCustom from "../common/custom/FlatlistCustom";

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
const App = () => {
  const books = [
    {
      title: "Find a peaceful place",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Chưa tình hẹn ước",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Thanh xuân của tôi...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Time in the honeypot",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Years do not fade",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Turns out he's still.....",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Together forever",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "The corner of the .....",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Mac father was cold",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Rainbow candy",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "May does not return",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "My youth...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "She is very cute",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Don't wait anymore",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Who says youth do...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
  ];
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
    <View className=" pb-14">
      <View className=" w-full  flex-row justify-between items-center ">
        <Text className="text-orange-app  font-normal leading-[46.09px]  text-[32px]">
          Incoming
        </Text>
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../../assets/images/Search_light.png")}
            width={29}
            height={29}
          />
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>
      <View className="banner my-5 flex-row justify-between items-center w-full ">
        <View className="item-left w-1/3 relative flex-row">
          <Image
            source={require("../../assets/images/footer-home1.png")}
            className="w-[54px] h-[76px] rounded-[5px] z-10 "
          />
          <Image
            source={require("../../assets/images/footer-left-2.png")}
            className="w-[54px] h-[76px] rounded-[5px] absolute  z-0 -top-1/4 left-[40%]"
          />
          <Image
            source={require("../../assets/images/footer-left-3.png")}
            className="w-[54px] h-[76px] rounded-[5px] absolute right-1 z-10 -bottom-1/4"
          />
        </View>
        <View className="item-middle w-1/3">
          <Image
            source={require("../../assets/images/footer-home-middle.png")}
            className="w-full h-[101px] rounded-[5px]"
          />
        </View>
        <View className="item-right w-1/3 flex-row-reverse relative ">
          <Image
            source={require("../../assets/images/footer-right-1.png")}
            className="w-[54px] h-[76px] rounded-[5px] absolute left-1 z-10 -bottom-1/4"
          />
          <Image
            source={require("../../assets/images/footer-right-2.png")}
            className="w-[54px] h-[76px] rounded-[5px] absolute  z-0 -top-1/4 right-[40%]"
          />
          <Image
            source={require("../../assets/images/footer-right-3.png")}
            className="w-[54px] h-[76px] rounded-[5px]  z-10 right-0 "
          />
        </View>
      </View>
      <View className="dropdown w-full rounded-10 flex-row justify-end h-7 mb-5">
        <View className="w-3/4 bg-orange-app rounded-10 flex-row justify-between items-center px-2">
          <Text className="text-white font-normal text-15 leading-17.58">
            Love language
          </Text>
          <Feather name="chevron-down" size={24} color="white" />
        </View>
      </View>

      <FlatlistCustom
        data={mangas}
        styleContainer={"mt-4"}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        horizontal={false}
        numColumns={3}
        scrollEnable={false}
        styleItem={{ width: "w-full", height: "h-[112px]" }}
      />
      <View className="pagination mt-5">
        <Pagination />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 18,
  },
  columnWrapperStyle: {
    gap: 18,
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  paginationButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
  },
  paginationButtonText: {
    fontSize: 14,
  },
  paginationEllipsis: {
    fontSize: 14,
  },
});

export default App;
