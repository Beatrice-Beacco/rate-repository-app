import React from "react";
import RepositoryItem from "./RepositoryItem";
import useGetRepository from "../hooks/useGetRepository";
import { useParams } from "react-router-dom";
import { Text } from "react-native";

const RepositoryView = () => {
  const { repoId } = useParams();
  const { repo } = useGetRepository(repoId);

  if (!repo) return <Text>Loading...</Text>;

  return <RepositoryItem item={repo} displayButton={true} />;
};

export default RepositoryView;
