import { FlatList } from "react-native";
import React from "react";
import MangaCardStory from "../rank/story/MangaCardStory";
import MangaCardRow from "../MangaCardRow";

interface IProps {
  data: any[];
  itemRender: boolean;
  showContinue: boolean;
  showNumberOfRead: boolean;
  showEvaluate: boolean;
}
const FlatlistCustomRow = (props: IProps) => {
  const { data, itemRender, showContinue, showNumberOfRead, showEvaluate } =
    props;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) =>
        itemRender ? (
          <MangaCardStory data={item} height={112} width={"w-[26%]"} />
        ) : (
          <MangaCardRow
            data={item}
            height={142}
            width={"w-[30%]"}
            showNumberOfRead={showNumberOfRead}
            showContinue={showContinue}
            showEvaluate={showEvaluate}
          />
        )
      }
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
    ></FlatList>
  );
};

export default FlatlistCustomRow;
