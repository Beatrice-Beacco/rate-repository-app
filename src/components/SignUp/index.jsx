import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import SignUpForm from "./SignUpForm";
import useSignUp from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object({
  username: yup.string().min(5).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "The passwords are not matching")
    .required("Password confirmation is required"),
});

const onSubmit = async (values, signUp, navigate) => {
  await signUp(values);
  navigate(`/`, { replace: true });
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values, signUp, navigate)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
