import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Circle, Path, Svg } from "react-native-svg";
import { IManga } from "@/type";

const ContentDetail = (props: {
  data: IManga;
  showNumberOfRead: boolean;
  showContinue: boolean;
  showEvaluate: boolean;
}) => {
  const { data, showNumberOfRead, showContinue, showEvaluate } = props;

  return (
    <View className="justify-center gap-1 w-full">
      <Text className="font-light text-15 leading-17.58 w-[62%] text-orange-app truncate mb-1">
        {data?.title}
      </Text>
      <View className="flex-row gap-1 items-center">
        <Svg
          width={19}
          height={19}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M7.6 15.087h0c.24-.136.432-.33.584-.481l.04-.04L13.77 9.02l.025-.026c.203-.202.4-.4.55-.58.166-.2.341-.456.428-.79a2 2 0 000-.997 2.015 2.015 0 00-.428-.79c-.15-.182-.348-.379-.55-.581l-.025-.026-.026-.025c-.202-.203-.4-.4-.58-.55a2.015 2.015 0 00-.79-.428 2 2 0 00-.997 0c-.335.086-.59.261-.79.428-.182.15-.379.347-.581.55l-.026.025-5.545 5.546-.04.04c-.153.152-.346.343-.483.585-.136.242-.201.505-.253.714l-.014.055-.455 1.82-.009.035c-.036.147-.087.35-.105.53-.02.206-.027.658.342 1.027.369.369.82.362 1.027.342.18-.018.383-.069.53-.106l.034-.008 1.821-.456.055-.013c.209-.052.472-.117.714-.254z"
            stroke="#33363F"
            strokeWidth={2}
          />
          <Path
            d="M9.896 5.937l2.375-1.583 2.375 2.375-1.584 2.375-3.166-3.167z"
            fill="#33363F"
          />
        </Svg>
        <Text className="text-sm leading-16.1">Author: {data?.author}</Text>
      </View>
      {showNumberOfRead && (
        <View className="flex-row gap-1 items-center ">
          <Svg
            width={19}
            height={19}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx={9.49992} cy={9.50004} r={2.66667} stroke="#222" />
            <Path
              d="M16.625 9.5S15.833 3.167 9.5 3.167 2.375 9.5 2.375 9.5"
              stroke="#222"
            />
          </Svg>
          <Text className="text-sm leading-16.1">
            Number of reads: {data?.view}k
          </Text>
        </View>
      )}
      <Text className="mb-2">Chapter {data?.chapter}: Side story </Text>
      {showContinue && (
        <TouchableOpacity>
          <View className="py-1 rounded-full overflow-hidden bg-orange-app  max-w-[36%] ">
            <Text className="text-white text-center">Continue reading</Text>
          </View>
        </TouchableOpacity>
      )}
      {showEvaluate && (
        <TouchableOpacity>
          <View className="py-1 rounded-full overflow-hidden bg-orange-app  max-w-[36%] ">
            <Text className="text-white text-center">Evaluate now</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContentDetail;
