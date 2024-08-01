import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Rank() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Rank</Text>
        <Feather name="search" size={24} color="orange" />
        <Feather name="refresh-cw" size={24} color="orange" />
      </View>

      <View style={styles.dropdown}>
        <Text>Ranked by week</Text>
        <Feather name="chevron-down" size={24} color="orange" />
      </View>

      <View style={styles.topRanked}>{/* Add top 3 ranked items here */}</View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 10 hot stories of the week</Text>
        <View style={styles.storyGrid}>{/* Add story items here */}</View>
        <TouchableOpacity>
          <Text style={styles.seeMore}>Xem thêm »</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Review of stories</Text>
        {/* Add review items here */}
        <TouchableOpacity>
          <Text style={styles.seeMore}>Xem thêm »</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
    margin: 16,
  },
  topRanked: {
    // Style for top 3 ranked items
  },
  section: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  storyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  seeMore: {
    color: "orange",
    textAlign: "right",
    marginTop: 8,
  },
});
