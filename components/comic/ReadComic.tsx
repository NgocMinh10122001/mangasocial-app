import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReadComic() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Language Love The greatest thing... Chapter 1
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>
          The Greatest Thing That Mr Heaven's Arrangement
        </Text>
        <Text style={styles.subtitle}>Chapter 1: Introduction</Text>

        <View style={styles.divider} />

        <View style={styles.chapterNav}>
          <TouchableOpacity style={[styles.navButton, styles.disabledButton]}>
            <Text style={styles.navButtonText}>Previous chapter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.activeButton]}>
            <Text style={styles.navButtonText}>Chapter 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Next chapter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

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
          <TouchableOpacity style={[styles.navButton, styles.disabledButton]}>
            <Text style={styles.navButtonText}>Previous chapter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.activeButton]}>
            <Text style={styles.navButtonText}>Chapter 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Next chapter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
    color: "orange",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  chapterNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeButton: {
    backgroundColor: "orange",
  },
  disabledButton: {
    opacity: 0.5,
  },
  navButtonText: {
    textAlign: "center",
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
    backgroundColor: "orange",
    marginHorizontal: 10,
  },
  paragraph: {
    marginBottom: 15,
    lineHeight: 20,
  },
});
