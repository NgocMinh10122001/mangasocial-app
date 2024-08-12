import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function SearchManga() {
  const [email, setEmail] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    // <View className="rounded-[7px] bg-[#DADADA] w-full h-[33px] flex-row  items-center px-1">
    //   <EvilIcons name="search" size={20} color="#222222" />
    //   <TextInput
    //     onChangeText={onChangeText}
    //     value={""}
    //     placeholder="Search"
    //     className="   font-normal text-base !leading-[18.75px] outline-none"
    //   />
    // </View>
    <View
      style={styles.input}
      className="  w-full  flex-row  items-center px-1"
    >
      <EvilIcons name="search" size={20} color="#222222" />
      <TextInput placeholder="Search" value={email} onChangeText={setEmail} />
    </View>
  );
}

export default SearchManga;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});
