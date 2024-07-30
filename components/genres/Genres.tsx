import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
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
function Genres() {
  return (
    <View className="genre-container font-sans">
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
      <View className="flat-list grid grid-cols-2">
        {genres &&
          genres.length > 0 &&
          genres.map((item) => <GenreItem key={item?.id} item={item} />)}
      </View>
    </View>
  );
}

export default Genres;

export const GenreItem = (item: any) => {
  return (
    <View className="bg-black rounded-10">
      <Image
        source={{
          uri: `${item?.item?.img}`,
        }}
        width={29}
        height={29}
      ></Image>
    </View>
  );
};
