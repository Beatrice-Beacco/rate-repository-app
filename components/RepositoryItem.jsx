import { View, Text } from "react-native";

const RepositoryItem = ({ item, separator }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    reviewCount,
    ratingAverage,
  } = item;

  return (
    <View style={separator}>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
