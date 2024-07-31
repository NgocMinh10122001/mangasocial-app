import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const App = () => {
  const books = [
    {
      title: "Find a peaceful place",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Chưa tình hẹn ước",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Thanh xuân của tôi...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Time in the honeypot",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Years do not fade",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Turns out he's still.....",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Together forever",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "The corner of the .....",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Mac father was cold",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "Rainbow candy",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "May does not return",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "My youth...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
    {
      title: "She is very cute",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 21",
      rating: 5,
    },
    {
      title: "Don't wait anymore",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 10",
      rating: 4.9,
    },
    {
      title: "Who says youth do...",
      image: require("../../assets/images/footer-home-middle.png"),
      chapter: "Chapter 30",
      rating: 5,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Incoming</Text>
        <View style={styles.headerIcons}>
          <Image
            source={require("../../assets/images/Search_light.png")}
            style={styles.icon}
          />
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={28}
            color="#FF9935"
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.featured}>
          <Image
            source={require("../../assets/images/footer-home-middle.png")}
            style={styles.featuredImage}
          />
          <View style={styles.featuredText}>
            <Text style={styles.featuredTitle}>Love language</Text>
          </View>
        </View>

        <View style={styles.books}>
          {books.map((book, index) => (
            <TouchableOpacity key={index} style={styles.book}>
              <Image source={book.image} style={styles.bookImage} />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookChapter}>Chapter: {book.chapter}</Text>
                <View style={styles.bookRating}>
                  <Image
                    source={require("../../assets/images/footer-home-middle.png")}
                    style={styles.starIcon}
                  />
                  <Text style={styles.bookRatingText}>{book.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.pagination}>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>4</Text>
        </TouchableOpacity>
        <Text style={styles.paginationEllipsis}>...</Text>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paginationButton}>
          <Text style={styles.paginationButtonText}>20</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Genres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButtonActive}>
          <Text style={styles.footerButtonText}>Incoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Rank</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    backgroundColor: "#FFA500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  featured: {
    height: 150,
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredText: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  books: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  book: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  bookImage: {
    width: "100%",
    height: 150,
  },
  bookInfo: {
    padding: 16,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookChapter: {
    fontSize: 12,
    marginBottom: 4,
  },
  bookRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  bookRatingText: {
    fontSize: 12,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  paginationButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
  },
  paginationButtonText: {
    fontSize: 14,
  },
  paginationEllipsis: {
    fontSize: 14,
  },
  footer: {
    height: 60,
    backgroundColor: "#FFA500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  footerButtonActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "#FFD700",
  },
  footerButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default App;
