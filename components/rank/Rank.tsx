import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import MangaCardSlide from "../common/MangaCardSlide";
import MangaCard from "../common/MangaCard";
import MangaCardStory from "../common/rank/story/MangaCardStory";

const data: any[] = [
  {
    title: "Item 1",
    subtitle: "Subtitle 1",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    title: "Item 1",
    subtitle: "Subtitle 1",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  // Add more items as needed
];
const mangas: any[] = [
  {
    id: "0",
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần ",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
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
    title: "Top những truyện ngôn tình được đánh giá tốt nhất trong tuần",
    thumbnail:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",

    chapter: "21",
    urlManga: "",
    urlChapter: "",
    chapterNew: "22",
    rate: "5",
  },
];
const { width, height } = Dimensions.get("window");
export default function Rank() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <ScrollView style={styles.container} className="pb-14">
      <View className=" w-full  flex-row justify-between items-center ">
        <Text className="text-orange-app  font-normal leading-[46.09px]  text-[32px]">
          Rank
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
      <View className="dropdown w-full h-fit flex-row justify-end ">
        <View style={styles.dropdown}>
          <Text>Ranked by week</Text>
          <Feather name="chevron-down" size={24} color="orange" />
        </View>
      </View>

      <View style={styles.topRanked}>
        <View className="mt-4 flex justify-center items-center ">
          <Carousel
            data={data}
            renderItem={({ item }) => <MangaCardSlide item={item} />}
            sliderWidth={width}
            firstItem={1}
            itemWidth={131}
            // inactiveSlideOpacity={0.6}
            hasParallaxImages={true}
            loop={true}
            slideStyle={{ display: "flex", justifyContent: "center" }}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View className="w-[76px] h-[7px] rounded-[5px] bg-orange-app mb-3"></View>
        <Text style={styles.sectionTitle} className="font-normal">
          Top 10 hot stories of the week
        </Text>

        <FlatList
          scrollEnabled={false}
          numColumns={4}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={mangas}
          renderItem={({ item }) => <MangaCard data={item} height={112} />}
          className="content "
        ></FlatList>
        <TouchableOpacity className="w-full flex-row justify-center">
          <Text style={styles.seeMore}>Xem thêm »</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View className="w-[76px] h-[7px] rounded-[5px] bg-orange-app mb-3"></View>
        <Text style={styles.sectionTitle} className="font-normal">
          Review of stories
        </Text>
        <FlatList
          scrollEnabled={false}
          data={mangas}
          renderItem={({ item }) => <MangaCardStory data={item} height={112} />}
          className="content "
        ></FlatList>
        <TouchableOpacity className="w-full flex-row justify-center">
          <Text style={styles.seeMore}>Xem thêm »</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {
    gap: 10,
  },
  columnWrapperStyle: {
    gap: 10,
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 42,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
    width: "60%",
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  topRanked: {
    // Style for top 3 ranked items
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 16,
  },
  storyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  seeMore: {
    color: "orange",
    textAlign: "right",
    marginTop: 8,
  },
  paginationContainer: {
    paddingVertical: 0,
    paddingTop: 16,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "#ED6119",
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
    backgroundColor: "gray",
  },
});
