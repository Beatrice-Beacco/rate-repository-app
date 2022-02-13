import React from "react";
import Button from "./Button";
import useDeleteReview from "../hooks/useDeleteReview";
import { Alert } from "react-native";

const deleteReviewById = async (id, deleteFunction) => {
  Alert.alert("Delete review", "Are you sure you want to delete this review?", [
    {
      text: "CANCEL",
      style: "cancel",
    },
    { text: "DELETE", onPress: async () => await deleteFunction(id) },
  ]);
};

const DeleteRepositoryButton = ({ reviewId }) => {
  const [deleteReview] = useDeleteReview();

  return (
    <Button
      type="danger"
      text="Delete review"
      callback={() => deleteReviewById(reviewId, deleteReview)}
    />
  );
};

export default DeleteRepositoryButton;
