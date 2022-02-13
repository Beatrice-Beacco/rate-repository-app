import React from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../theme";
import ViewRepositoryButton from "./ViewRepositoryButton";
import DeleteRepositoryButton from "./DeleteRepositoryButton";

import { format, parseISO } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    //marginTop: theme.paddings.divider,
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
  buttons: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    paddingBottom: theme.paddings.divider,
    justifyContent: "space-around",
  },
});

const renderReviewActions = (repositoryId, reviewId) => {
  return (
    <>
      <ViewRepositoryButton repositoryId={repositoryId} />
      <DeleteRepositoryButton reviewId={reviewId} />
    </>
  );
};

const ReviewItem = ({ review, displayActions }) => {
  const formattedDate = format(parseISO(review.createdAt), "PPP");
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.score, styles.scoreColumn]}>{review.rating}</Text>
        <View style={styles.infoColumn}>
          <Text style={styles.nameText}>
            {!displayActions
              ? review.user.username
              : review.repository.ownerName + "/" + review.repository.name}
          </Text>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.descriptionText}>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        {displayActions && renderReviewActions(review.repository.id, review.id)}
      </View>
    </>
  );
};

export default ReviewItem;
