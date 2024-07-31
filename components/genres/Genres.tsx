import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
const { width } = Dimensions.get("window");
const genres: any[] = [
  {
    name: "Sword Hero",
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
    id: 1,
  },
  {
    name: "Language Love",
    id: 2,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Novel",
    id: 3,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Cartoon",
    id: 4,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Action",
    id: 5,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Trinh Thám",
    id: 6,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Youth in the school garden",
    id: 7,

    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Transcendence",
    id: 8,

    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Comedy",
    id: 9,

    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Drama",
    id: 10,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Music",
    id: 11,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
  {
    name: "Action",
    id: 12,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
  },
];
const genres1: any[] = genres.slice(0, 2);
const genres2: any[] = genres.slice(2, 3);
const genres3: any[] = genres.slice(3, 7);
const genres4: any[] = genres.slice(7, 8);
const genres5: any[] = genres.slice(8, 12);

function Genres() {
  return (
    <View className="genre-container font-sans w-full h-full pb-14">
      <View className=" w-full  flex-row justify-between items-center bg-white">
        <Text className="text-orange-app  font-normal leading-[46.09px]  text-[32px]">
          Genres
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
      <View>
        <Text className="text-black text-lg leading-21 font-normal w-full text-center mt-17">
          Delight your passion with Manga Social
        </Text>
      </View>
      <FlatList
        style={styles.flatlist}
        scrollEnabled={false}
        className="genres1"
        numColumns={2}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={genres1}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
      <FlatList
        style={[styles.flatlist]}
        scrollEnabled={false}
        className="genres2"
        numColumns={2}
        contentContainerStyle={{
          gap: 20,
        }}
        columnWrapperStyle={{ gap: 20 }}
        data={genres2}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
      <FlatList
        style={styles.flatlist}
        scrollEnabled={false}
        className="genres3"
        numColumns={2}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={genres3}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
      <FlatList
        style={styles.flatlist}
        scrollEnabled={false}
        className="genres4"
        numColumns={2}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={genres4}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
      <FlatList
        style={styles.flatlist}
        scrollEnabled={false}
        className="genres5"
        numColumns={2}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ gap: 20 }}
        data={genres5}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
      {/* <FlatList
        style={{
          flex: 1,
          marginTop: 10,
          marginBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        scrollEnabled={false}
        data={genres}
        numColumns={2}
        columnWrapperStyle={{ gap: 8 }}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={item?.id !== 3 ? styles.wrapper : styles.w}>
            <GenreItem item={item} />
          </View>
        )}
      ></FlatList> */}
    </View>
  );
}

export default Genres;

export const GenreItem = (item: any) => {
  return (
    <View
      className={` relative ${
        item?.item?.id !== 9 && item?.item?.id !== 10
          ? "h-[107px]"
          : "h-[211px]"
      }`}
      style={
        item?.item?.id !== 3 && item?.item?.id !== 8
          ? styles.itemRenderList
          : styles.itemRenderList2
      }
    >
      <Image
        source={{
          uri: `${item?.item?.img}`,
        }}
        className=" h-full"
        style={
          item?.item?.id !== 3 && item?.item?.id !== 8 ? {} : styles.image70
        }
      ></Image>
      <Text className="absolute bottom-0 text-white font-normal text-base !leading-18.75 w-full text-center">
        {item?.item?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginTop: 20,
  },
  itemRenderList: {
    flex: 1,
  },
  itemRenderList2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image70: {
    width: "80%",
  },
});
