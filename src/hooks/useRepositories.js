import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const { data, error, load, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const fetchRepositories = async () => {
    setLoading(true);

    if (data) {
      setRepositories(data.repositories);
    }

    if (error)
      throw new Error(
        "An error in the fetching of repositories occurred",
        error
      );

    setLoading(load);
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories,
    loading,
    refetch: fetchRepositories,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
