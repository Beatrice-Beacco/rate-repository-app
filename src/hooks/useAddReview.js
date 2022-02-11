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

/* {
  "errors": [
    {
      "message": "User has already reviewed this repository",
      "locations": [
        {
          "line": 5,
          "column": 3
        }
      ],
      "path": [
        "createReview"
      ],
      "extensions": {
        "code": "REPOSITORY_ALREADY_REVIEWED",
        "exception": {
          "stacktrace": [
            "Error: User has already reviewed this repository",
            "    at Object.createReview (C:\\Users\\Utente\\Desktop\\EserciziProgrammazione\\esfullstack\\rate-repository-api\\src\\graphql\\mutations\\createReview.js:95:15)"
          ]
        }
      }
    }
  ],
  "data": {
    "createReview": null
  }
} */

/* query {
  repository(id: "jaredpalmer.formik") {
    reviews {
      edges {
        node {
          id
          user {
            username
          }
        }
      }
    }
  }
} */
