import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import repositories from "../repositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      // eslint-disable-next-line no-unused-vars
      renderItem={({ item, index, separators }) => (
        <RepositoryItem item={item} separator={separators} />
      )}
    />
  );
};

export default RepositoryList;
