import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchManga from "../common/search/SearchManga";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ScrollView } from "react-native";
import NewRealse from "./NewRealse";
import MangaCardSlide from "../common/MangaCardSlide";
import { IMangaDetail, Item } from "@/type";
import { useLocalSearchParams } from "expo-router";

const data: Item[] = [
  {
    id: 1,
    title: "Item 1",
    subtitle: "Subtitle 1",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    id: 2,
    title: "Item 2",
    subtitle: "Subtitle 2",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    id: 3,
    title: "Item 1",
    subtitle: "Subtitle 1",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  {
    id: 4,
    title: "Item 2",
    subtitle: "Subtitle 2",
    illustration:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496",
  },
  // Add more items as needed
];
const mangas: IMangaDetail[] = [
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

const { width, height } = Dimensions.get("window");

function HomeScreens() {
  const params = useLocalSearchParams();
  let server = params.server || "1";
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <ScrollView className="" showsVerticalScrollIndicator={false}>
      <View className="flex-row items-center justify-between">
        <Text className="text-orange-app font-[Satisfy] font-normal leading-[46.09px] text-center text-[32px]">
          Manga Social
        </Text>
        <MaterialCommunityIcons
          name="bell-badge-outline"
          size={28}
          color="#FF9935"
        />
      </View>
      <SearchManga />
      <View className="mt-4 flex justify-center items-center ">
        <Carousel
          data={data}
          renderItem={({ item }) => <MangaCardSlide item={item} />}
          sliderWidth={width}
          firstItem={1}
          itemWidth={120}
          inactiveSlideOpacity={0.8}
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
        {/* <TrendingCarousel post={data} />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.activeDot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        /> */}
      </View>
      <NewRealse
        data={mangas}
        showTitle={true}
        title={"Lastest Manga"}
        sv={server}
        type={"lastest_manga"}
      />
      <NewRealse
        data={mangas}
        showTitle={true}
        title={"New Release Comics"}
        sv={server}
        type={"recommended_comics"}
      />
      <NewRealse
        data={mangas}
        showTitle={true}
        title={"Recommended Comics"}
        sv={server}
        type={"new_release_comics"}
      />
      <NewRealse
        data={mangas}
        showTitle={true}
        title={"Coming Soon Comics"}
        sv={server}
        type={"cooming_soon_comics"}
      />
      <View className="banner-footer mt-6 flex-row justify-between items-center w-full pb-6">
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
    </ScrollView>
  );
}

export default HomeScreens;

const styles = StyleSheet.create({
  containerStyle: {
    height: 192,
    width: width * 0.6,
    borderRadius: 8,
  },
  slide: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    height: 150,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
