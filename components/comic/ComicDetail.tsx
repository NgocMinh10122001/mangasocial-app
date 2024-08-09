import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Pagination from "../common/pagination/Pagination";

const ComicDetail = () => {
  return (
    <ScrollView style={styles.container} className="pb-14">
      <View className=" w-full  flex-row justify-between items-center mb-3">
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
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>
      <View className="w-full h-[395px] relative rounded-10 overflow-hidden">
        <Image
          source={{
            uri: `https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=496`,
          }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Doraemon - robot cat from the future</Text>
          <Text style={styles.author}>Author: Xuan Dao Han</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Text key={star} style={styles.star}>
                ⭐
              </Text>
            ))}
            <Text style={styles.ratingText}>Rating: 5/5</Text>
          </View>
          <View style={styles.statsContainer}>
            <StatItem label="Chapter" value="25" />
            <StatItem label="View" value="3.1k" />
            <StatItem label="Status" value="Complete" />
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle} className="w-full text-center">
        Category
      </Text>
      <View style={styles.categoryContainer}>
        {["Love language", "Charismatic", "School"].map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Summary of story content</Text>
      <Text style={styles.summary}>
        Which pine or cypress tree in a dark place needs to be visited but its
        leaves are still green all year round? The apricot tree amidst the snow,
        frost, and cold wind, without needing friends, still blooms just in time
        for Spring....... See More
      </Text>

      <Text style={styles.sectionTitle}>Chapter list</Text>
      <View style={styles.chapterInputContainer}>
        <TouchableOpacity style={styles.chapterInput}>
          <Text>Enter the chapter number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findButton}>
          <Text style={styles.findButtonText}>Find</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Pagination showPaginateLeft={true} />
      </View>

      {[
        { title: "Chapter 1: Introduction", date: "2024-5-29" },
        { title: "Chapter 2: A little spring in....", date: "2024-5-29" },
        {
          title: "Chapter 3: I will wake up from this dre....",
          date: "2024-5-29",
        },
        { title: "Chapter 4: Dream of embracing Ho Sa", date: "2024-5-29" },
        {
          title: "Chapter 5: Once following the afterno....",
          date: "2024-5-29",
        },
        {
          title: "Chapter 6: The day the flowers bloom ....",
          date: "2024-5-29",
        },
      ].map((chapter, index) => (
        <View key={index} style={styles.chapterItem}>
          <Text style={styles.chapterTitle}>{chapter.title}</Text>
          <Text style={styles.chapterDate}>{chapter.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const StatItem = ({ label, value }: { label: any; value: any }) => (
  <View style={styles.statItem}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    color: "white",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  ratingText: {
    color: "white",
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    color: "white",
    fontSize: 12,
  },
  statValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  downloadText: {
    color: "black",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "orange",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  categoryText: {
    color: "white",
  },
  summary: {
    marginVertical: 10,
  },
  chapterInputContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  chapterInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    marginRight: 10,
  },
  findButton: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5,
  },
  findButtonText: {
    color: "white",
  },
  chapterNumbersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  chapterNumber: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    borderRadius: 5,
  },
  chapterItem: {
    marginVertical: 10,
  },
  chapterTitle: {
    fontWeight: "bold",
  },
  chapterDate: {
    color: "gray",
  },
});

export default ComicDetail;
