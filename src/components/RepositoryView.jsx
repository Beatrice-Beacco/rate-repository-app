import React from "react";
import RepositoryItem from "./RepositoryItem";
import useGetRepository from "../hooks/useGetRepository";
import { useParams } from "react-router-dom";
import Spinner from "react-native-loading-spinner-overlay";
import ReviewList from "./ReviewList";

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
    <ReviewList
      list={reviewNodes}
      ListHeaderComponent={() => (
        <RepositoryItem item={repo} displayButton={true} />
      )}
      onEndReached={() => onEndReach()}
    />
  );
};

export default RepositoryView;
