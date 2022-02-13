import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { LOGGED_USER } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {
        query: LOGGED_USER,
        variables: {
          includeReviews: true,
        },
      },
    ],
  });

  const deleteReview = async (deleteReviewId) => {
    await mutate({
      variables: {
        deleteReviewId,
      },
    });
  };

  return [deleteReview, result];
};

export default useDeleteReview;
