import React from "react";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import useGetRepository from "../hooks/useGetRepository";
import { useParams } from "react-router-dom";
import { FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const RepositoryView = () => {
  const { repoId } = useParams();
  const { repo, fetchMore } = useGetRepository({
    repo: repoId,
    first: 6,
  });

  const reviewNodes = repo ? repo.reviews.edges.map((edge) => edge.node) : [];

  if (!repo) {
    return (
      <Spinner
        visible={!repo}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repo} displayButton={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryView;
