import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import FlatlistCustomRow from "@/components/common/custom/FlatlistCustomRow";
import { mangasFake } from "@/type/fakedata";
import Pagination from "@/components/common/pagination/Pagination";

interface IProps {
  id: string | string[] | undefined;
}
const GenreDetail = (props: IProps) => {
  const { id } = props;
  return (
    <View className="genre-container  w-full h-full pb-14">
      <View className=" w-full  flex-row justify-between items-center ">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row gap-2 items-center"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="text-orange-app  font-normal leading-[34.09px]  text-[29px]">
            Cartoon
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../../../assets/images/Search_light.png")}
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
      <View className="my-4">
        <FlatlistCustomRow
          data={mangasFake}
          itemRender={false}
          showContinue={true}
          showNumberOfRead={true}
        />
      </View>
      <Pagination />
    </View>
  );
};

export default GenreDetail;
