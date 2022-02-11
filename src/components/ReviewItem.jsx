import React from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../theme";

import { format, parseISO } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginTop: theme.paddings.divider,
    padding: theme.paddings.divider,
    flexDirection: "row",
  },
  score: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.score,
    paddingLeft: 11,
    paddingTop: theme.paddings.divider,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 100,
  },
  scoreColumn: {
    flexDirection: "column",
  },
  infoColumn: {
    flexDirection: "column",
    marginLeft: theme.paddings.divider,
    flex: 1,
  },
  nameText: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.heading,
  },
  descriptionText: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
  },
  date: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(parseISO(review.createdAt), "PPP");
  return (
    <View style={styles.container}>
      <Text style={[styles.score, styles.scoreColumn]}>{review.rating}</Text>
      <View style={styles.infoColumn}>
        <Text style={styles.nameText}>{review.user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.descriptionText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
