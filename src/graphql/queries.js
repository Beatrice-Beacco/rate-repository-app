import { gql } from "@apollo/client";

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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
      }
    }
  }
`;
//repositoryId($id: String)
export const GET_REPOSITORY = gql`
  query repo($repo: ID!) {
    repository(id: $repo) {
      id
      fullName
      url
    }
  }
`;
