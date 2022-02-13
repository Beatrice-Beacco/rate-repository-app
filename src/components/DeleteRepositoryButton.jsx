import React from "react";
import Button from "./Button";
import useDeleteReview from "../hooks/useDeleteReview";

const deleteReviewById = async (id, deleteFunction) => {
  await deleteFunction(id);
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
