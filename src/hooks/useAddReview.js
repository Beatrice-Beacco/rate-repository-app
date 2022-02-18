import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useAddReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const numberRating = Number(rating);
    const review = await mutate({
      variables: {
        review: {
          ownerName,
          rating: numberRating,
          repositoryName,
          text,
        },
      },
    });

    if (result.error)
      throw new Error("Error while trying to add a review", review.errors);

    return review.data.createReview;
  };

  return [createReview, result];
};

export default useAddReview;

