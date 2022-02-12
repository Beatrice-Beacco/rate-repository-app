import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from "./fragments";

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
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...DisplayFields
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
  query repo($repo: ID!) {
    repository(id: $repo) {
      url
      ...DisplayFields
      ...ReviewFields
    }
  }
`;
