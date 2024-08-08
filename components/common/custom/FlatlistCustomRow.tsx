import { View, Text, FlatList } from "react-native";
import React from "react";
import MangaCardStory from "../rank/story/MangaCardStory";

interface IProps {
  data: any[];
}
const FlatlistCustomRow = (props: IProps) => {
  const { data } = props;
  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      renderItem={({ item }) => <MangaCardStory data={item} height={112} />}
      className="content "
    ></FlatList>
  );
};

export default FlatlistCustomRow;
