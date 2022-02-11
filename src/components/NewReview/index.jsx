import React from "react";
import useAddReview from "../../hooks/useAddReview";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 20,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
});

import ReviewForm from "./ReviewForm";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object({
  ownerName: yup.string().required("Owner username is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating must be a number between 0 and 100"),
});

const NewReview = () => {
  let navigate = useNavigate();
  const [createReview] = useAddReview();

  const onSubmit = async (
    values,
    createReviewFunction,
    navigateFunction,
    setError
  ) => {
    try {
      const { repositoryId } = await createReviewFunction(values);
      navigateFunction(`/repository/${repositoryId}`, { replace: true });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setStatus }) =>
        onSubmit(values, createReview, navigate, setStatus)
      }
      validationSchema={validationSchema}
    >
      {({ handleSubmit, status }) => {
        console.log("Errors", status);
        return (
          <>
            <ReviewForm onSubmit={handleSubmit} />
            {status && Object.keys(status).length != 0 && (
              <Text style={styles.errorText}>ERROR: {status}</Text>
            )}
          </>
        );
      }}
    </Formik>
  );
};

export default NewReview;
