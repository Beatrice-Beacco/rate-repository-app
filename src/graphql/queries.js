import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS, REVIEW_FIELDS, PAGE_INFO } from "./fragments";

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
  ${PAGE_INFO}
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
        ...PageInfo
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
  ${PAGE_INFO}
  query repo($repo: ID!, $after: String, $first: Int) {
    repository(id: $repo) {
      url
      ...DisplayFields
      reviews(after: $after, first: $first) {
        pageInfo {
          ...PageInfo
        }
        totalCount
        ...ReviewFields
      }
    }
  }
`;
