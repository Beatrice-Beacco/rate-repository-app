import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-dom";
import Spinner from "react-native-loading-spinner-overlay";

import OrderSelector from "./OrderSelector";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
}) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigateToRepositoryView = (item, event) => {
    event.preventDefault();
    navigate(`/repository/${item.id}`, { replace: true });
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <OrderSelector setOrder={setOrderBy} setDirection={setOrderDirection} />
      }
      keyExtractor={(item) => item.id}
      // eslint-disable-next-line no-unused-vars
      renderItem={({ item, index, separators }) => (
        <Pressable onPress={(e) => navigateToRepositoryView(item, e)}>
          <RepositoryItem
            item={item}
            separator={separators}
            displayButton={false}
          />
        </Pressable>
      )}
    />
  );
};

//TODO: passare set order e set direction
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const { repositories } = useRepositories(orderBy, orderDirection);

  if (!repositories)
    return (
      <Spinner
        visible={!repositories}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
      />
    );

  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
    />
  );
};

export default RepositoryList;
