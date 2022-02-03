import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

const RepositoryItem = ({ item, separator }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    reviewCount,
    ratingAverage,
    stargazersCount,
    ownerAvatarUrl,
  } = item;

  const styles = StyleSheet.create({
    entry: {
      backgroundColor: theme.colors.white,
      padding: 15,
    },
    nameText: {
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.subheading,
    },
    descriptionText: {
      color: theme.colors.textSecondary,
      fontFamily: theme.fonts.main,
      fontSize: theme.fontSizes.body,
    },
    languageText: {
      alignSelf: "flex-start",
      padding: 5,
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      color: theme.colors.white,
    },

    row: {
      paddingTop: 7,
      justifyContent: "space-evenly",
      flexDirection: "row",
    },

    sectionRow: {
      paddingTop: 7,
      flexDirection: "row",
    },

    column: {
      flexDirection: "column",
    },

    sectionColumn: {
      flexDirection: "column",
      flex: 1,
    },

    image: {
      width: theme.icon.size,
      height: theme.icon.size,
      borderRadius: 5,
      marginRight: 10,
    },
  });

  const turnIntoDecimal = (number) => {
    if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return number;
  };

  return (
    <View style={(separator, styles.entry)}>
      <View style={styles.sectionRow}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
        <View style={styles.sectionColumn}>
          <Text style={styles.nameText}> {fullName}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.languageText}>{language}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.nameText}>
            {turnIntoDecimal(stargazersCount)}
          </Text>
          <Text style={styles.descriptionText}>Stars</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.nameText}>{turnIntoDecimal(forksCount)}</Text>
          <Text style={styles.descriptionText}>Forks</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.nameText}>{reviewCount}</Text>
          <Text style={styles.descriptionText}>Reviews</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.nameText}>{ratingAverage}</Text>
          <Text style={styles.descriptionText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
