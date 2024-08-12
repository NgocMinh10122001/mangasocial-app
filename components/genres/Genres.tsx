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
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { genres } from "@/type/fakedata";
const { width } = Dimensions.get("window");

const genres1: any[] = genres.slice(0, 2);
const genres2: any[] = genres.slice(2, 3);
const genres3: any[] = genres.slice(3, 7);
const genres4: any[] = genres.slice(7, 8);
const genres5: any[] = genres.slice(8, 12);

function Genres() {
  return (
    <View className="genre-container font-sans w-full h-full pb-14">
      <View className=" w-full  flex-row justify-between items-center ">
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
        keyExtractor={(item, index) => index.toString()}
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
        keyExtractor={(item, index) => index.toString()}
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
        keyExtractor={(item, index) => index.toString()}
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
        keyExtractor={(item, index) => index.toString()}
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <GenreItem item={item} />}
      ></FlatList>
    </View>
  );
}

export default Genres;

export const GenreItem = (item: any) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("genres/5")}
      className={` rounded-lg overflow-hidden relative ${
        item?.item?.id !== 9 && item?.item?.id !== 10
          ? "h-[107px] "
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
        className=" h-full rounded-lg"
        style={
          item?.item?.id !== 3 && item?.item?.id !== 8 ? {} : styles.image70
        }
      ></Image>
      <Text className="absolute bottom-0 text-white font-normal text-base !leading-18.75 w-full text-center">
        {item?.item?.name}
      </Text>
    </TouchableOpacity>
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
