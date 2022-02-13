import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
  layout: {
    backgroundColor: theme.colors.white,
    padding: theme.paddings.verySmallPadding,
    alignItems: "stretch",
  },
  button: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.verySmallPadding,
    borderRadius: 5,
    textAlign: "center",
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.layout}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner username"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating (0 - 100)" />
      <FormikTextInput
        name="text"
        placeholder="Review comment"
        multiline={true}
        numberOfLines={3}
      />

      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
