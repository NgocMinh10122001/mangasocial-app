import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface IProps {
  title: string;
  placeholder: string;
  value: string;
  handleChangeText: any;
  otherStyle: string;
  keyboardType: string;
}
const FormField = (props: IProps) => {
  const {
    placeholder,
    value,
    handleChangeText,
    otherStyle,
    keyboardType,
    title,
  } = props;
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <View className="max-w-[370px] w-[90%] h-[50px] bg-white text-black rounded-[10px] relative flex-row items-center">
      <TextInput
        onChangeText={handleChangeText}
        value={value}
        placeholder={`@ ${placeholder}`}
        placeholderTextColor={"#00000063"}
        className={`flex-1 text-base leading-18.75 px-4`}
        secureTextEntry={title === "Password" && !showPass}
      />
      {title === "Password" && (
        <TouchableOpacity
          onPress={() => setShowPass(!showPass)}
          className="absolute right-[4%] p-1"
        >
          <Feather
            name={showPass ? "eye-off" : "eye"}
            size={24}
            color="#00000063"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormField;
