import React from "react";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ list, ...props }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReachedThreshold={0.5}
      {...props}
    />
  );
};

export default ReviewList;
