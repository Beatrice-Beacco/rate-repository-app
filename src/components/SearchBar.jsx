import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
  },
});

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
    />
  );
};

export default SearchBar;
