import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FlatList } from "react-native";

interface IProps {
  post: any[];
}

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};
const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: { activeItem: any; item: any }) => {
  return (
    <Animatable.View
      className=""
      animation={activeItem === item?.id ? zoomIn : zoomOut}
      duration={500}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}} className="">
        <ImageBackground
          source={{ uri: item?.illustration }}
          className={`w-[131px] h-[175px] rounded-[5px]  overflow-hidden shadow-lg shadow-black/40`}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};
const TrendingCarousel = (props: IProps) => {
  const { post } = props;
  const [activeItem, setActiveItem] = useState(post[0]);
  const viewableItemsChanged = (viewAbleItem: any) => {
    if (viewAbleItem.viewableItems.length > 0) {
      setActiveItem(viewAbleItem.viewableItems[0]?.key);
    }
  };
  return (
    <FlatList
      data={post}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TrendingCarousel;

const styles = StyleSheet.create({});
