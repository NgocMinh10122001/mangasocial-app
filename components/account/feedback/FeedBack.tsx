import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import FlatlistCustomRow from "@/components/common/custom/FlatlistCustomRow";
import { mangasFake } from "@/type/fakedata";

const FeedBack = () => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleCommit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", { email, rating, feedback });
  };
  return (
    <View className="pb-14">
      <View className=" w-full  flex-row justify-between items-center mb-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row gap-2 items-center"
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-orange-app  font-normal leading-[34.09px]  text-[29px]">
          FeedBack
        </Text>
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>
      <Text style={styles.label}>Mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Evaluate the story's content</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <AntDesign
              name={star <= rating ? "star" : "staro"}
              size={24}
              color="orange"
            />
          </TouchableOpacity>
        ))}
        <Text style={styles.ratingText}>{rating}/5</Text>
      </View>

      <Text style={styles.label}>Feedback content</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Please enter your feedback"
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
      />

      <TouchableOpacity style={styles.commitButton} onPress={handleCommit}>
        <Text style={styles.commitButtonText}>Commit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  seeMore: {
    color: "orange",
    textAlign: "right",
    marginTop: 8,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  ratingText: {
    marginLeft: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  commitButton: {
    backgroundColor: "#ED6119",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  commitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
