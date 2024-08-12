import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { IManga } from "@/type";
import TitleCustomOrange from "./custom/TitleCustomOrange";
import ContentDetail from "../genres/genre-detail/ContentDetail";
import { router } from "expo-router";

interface IProps {
  data: IManga;
  height: number | string;
  width: string | number;
  showNumberOfRead: boolean;
  showContinue: boolean;
  showEvaluate: boolean;
}
function MangaCardRow(props: IProps) {
  const { data, height, width, showNumberOfRead, showContinue, showEvaluate } =
    props;
  return (
    <View>
      <TitleCustomOrange showTitle={false} title="" />
      <TouchableOpacity
        onPress={() => router.push("genres/comic")}
        style={{ flex: 1 }}
        className="flex-row justify-start gap-3 mb-3 items-center "
      >
        <Image
          source={{
            uri: `${data?.thumbNail}`,
          }}
          style={{ height: height as number }}
          className={`rounded-lg  ${width}`}
        />
        <View>
          <ContentDetail
            data={data}
            showNumberOfRead={showNumberOfRead}
            showContinue={showContinue}
            showEvaluate={showEvaluate}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MangaCardRow;
