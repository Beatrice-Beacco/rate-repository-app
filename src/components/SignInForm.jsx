import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.layout}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
