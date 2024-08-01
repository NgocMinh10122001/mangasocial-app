import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IProps {
  totalPages: number;
  currentPage: number;
  onPageChange: any;
}
const PaginationCustomize = (props: IProps) => {
  const { totalPages, currentPage, onPageChange } = props;
  const generatePageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 4) {
        pages = [1, 2, 3, 4, "...", totalPages - 1, totalPages];
      } else if (currentPage > totalPages - 3) {
        pages = [
          1,
          2,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          2,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages;
  };

  return (
    <View style={styles.paginationContainer}>
      {generatePageNumbers().map((page, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => typeof page === "number" && onPageChange(page)}
          style={[
            styles.pageNumber,
            currentPage === page && styles.currentPage,
          ]}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === page && styles.currentPageText,
            ]}
          >
            {page}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  return (
    <View style={styles.container}>
      <PaginationCustomize
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pageNumber: {
    marginHorizontal: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
  currentPage: {
    backgroundColor: "#ED6119",
  },
  pageText: {
    color: "#000",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
  },
  currentPageText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
  },
});
