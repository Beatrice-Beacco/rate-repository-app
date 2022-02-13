import React from "react";
import useGetLoggedUser from "../../hooks/useGetLoggedUser";
import ReviewList from "../ReviewList";

const UserReviews = () => {
  const { user } = useGetLoggedUser(true);

  const reviewNodes = user ? user.reviews.edges.map((edge) => edge.node) : [];
  return <ReviewList list={reviewNodes} />;
};

export default UserReviews;
