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

export const REVIEW_FIELDS = gql`
  fragment ReviewFields on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
        repository {
          id
          ownerName
          name
        }
      }
      cursor
    }
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`;
