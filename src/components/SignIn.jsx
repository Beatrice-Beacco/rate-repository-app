import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";

import useSignIn from "../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const token = await signIn(values);
    console.log("Authentication token\n", token);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
