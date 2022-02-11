import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";

import useSignIn from "../../hooks/useSignIn";

import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInFormik = ({ onSubmit }) => {
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

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const token = await signIn(values);
    if (token) navigate("/", { replace: true });
  };

  return <SignInFormik onSubmit={onSubmit} />;
};

export default SignIn;
