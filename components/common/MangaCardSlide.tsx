import React from "react";
import { Dimensions, Image, TouchableWithoutFeedback } from "react-native";

const MangaCardSlide = (item: any) => {
  const { width, height } = Dimensions.get("window");
  return (
    <TouchableWithoutFeedback>
      <Image
        source={{
          uri: `${item.item.illustration}`,
        }}
        style={{ width: 131, height: 175 }}
        className="rounded-lg"
      />
    </TouchableWithoutFeedback>
  );
};

export default MangaCardSlide;
