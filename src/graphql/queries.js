import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS } from "./fragments";

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...DisplayFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repo($repo: ID!) {
    repository(id: $repo) {
      url
      ...DisplayFields
    }
  }
  ${REPOSITORY_FIELDS}
`;
