import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ list, displayActions, ...props }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <ReviewItem review={item} displayActions={displayActions} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReachedThreshold={0.5}
      {...props}
    />
  );
};

export default ReviewList;
