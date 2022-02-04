import React from "react";
import { View, Text, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ onSubmit }) => {
  console.log(onSubmit);
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
