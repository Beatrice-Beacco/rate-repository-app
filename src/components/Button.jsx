import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 5,
    padding: 15,
  },

  backgroundColorPrimary: {
    backgroundColor: theme.colors.primary,
  },

  backgroundColorError: {
    backgroundColor: theme.colors.error,
  },
});

const Button = ({ type, text, callback }) => {
  const buttonStyle = [
    styles.button,
    type === "primary" && styles.backgroundColorPrimary,
    type === "danger" && styles.backgroundColorError,
  ];

  return (
    <Pressable onPress={callback}>
      <Text style={buttonStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
