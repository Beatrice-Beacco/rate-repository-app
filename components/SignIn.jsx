import React from "react";

import { Formik } from "formik";

import SignInForm from "./SignInForm";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values.username, values.password);
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
