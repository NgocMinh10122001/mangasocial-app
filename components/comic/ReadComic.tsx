import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ReadComic() {
  const headerText = "This is a very long text that needs to be truncated.";
  const maxLength = 30; // Define your max length here
  const truncatedText =
    headerText.length > maxLength
      ? `${headerText.substring(0, maxLength - 1)}...`
      : headerText;
  return (
    <View style={styles.container}>
      <View
        style={styles.header}
        className="flex-row items-center justify-between"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center "
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>{truncatedText}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chapter 1</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          The Greatest Thing That Mr Heaven's Arrangement
        </Text>
        <Text style={styles.subtitle}>Chapter 1: Introduction</Text>

        <View className="w-full flex-row justify-center items-center mb-2">
          <Image
            source={require("../../assets/images/readchapter-img1.png")}
            className="w-[60px] h-[27px]"
            resizeMode="contain"
          />
        </View>

        <View style={styles.chapterNav}>
          <TouchableOpacity
            style={[styles.navButton, styles.disabledButton]}
            className="flex-row items-center justify-center"
          >
            <Text style={styles.navButtonText2}>Previous chapter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.activeButton]}
            className="flex-row items-center justify-center"
          >
            <View className="max-h-full max-w-full flex-row items-center gap-1 ">
              <Text style={styles.navButtonText}>Chapter 1</Text>
              <Feather name="chevron-down" size={22} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            className="flex-row items-center justify-center"
          >
            <Text style={styles.navButtonText2}>Next chapter</Text>
          </TouchableOpacity>
        </View>

        <View className="w-full flex-row justify-center items-center">
          <Image
            source={require("../../assets/images/readchapter-img2.png")}
            className="w-[158px] h-[27px]"
            resizeMode="contain"
          />
        </View>

        <View style={styles.audioPlayer}>
          <Text>0:00 / 13:03</Text>
          <View style={styles.progressBar} />
          <Ionicons name="volume-high" size={24} color="black" />
        </View>

        <Text style={styles.paragraph}>
          This action of Van Nha and Cao Minh Lang is indeed shameless, but it
          is clear that On Di Ninh has no place to complain. There is indeed
          another General Chu at the top, but this true boss of Ngha Thien media
          is a third-rate character, even if you find him, there is no hope of
          justice.
          {/* ... Rest of the text ... */}
        </Text>

        <View style={styles.chapterNav}>
          <TouchableOpacity
            style={[styles.navButton, styles.disabledButton]}
            className="flex-row items-center justify-center"
          >
            <Text style={styles.navButtonText2}>Previous chapter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.activeButton]}
            className="flex-row items-center justify-center"
          >
            <View className="max-h-full max-w-full flex-row items-center gap-1 ">
              <Text style={styles.navButtonText}>Chapter 1</Text>
              <Feather name="chevron-down" size={22} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            className="flex-row items-center justify-center"
          >
            <Text style={styles.navButtonText2}>Next chapter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ed6119",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
  },

  chapterNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  navButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeButton: {
    backgroundColor: "#ed6119",
  },
  disabledButton: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    color: "white",
  },
  navButtonText2: {
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    color: "black",
  },
  audioPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: "#ed6119",
    marginHorizontal: 10,
  },
  paragraph: {
    marginBottom: 15,
    lineHeight: 20,
  },
});
