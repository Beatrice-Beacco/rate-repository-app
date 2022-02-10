import { gql } from "@apollo/client";

export const REPOSITORY_FIELDS = gql`
  fragment DisplayFields on Repository {
    id
    fullName
    name
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    ownerAvatarUrl
    description
    language
  }
`;
