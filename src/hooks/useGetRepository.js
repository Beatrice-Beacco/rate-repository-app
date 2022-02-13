import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useGeRepository = (variables) => {
  const [repo, setRepo] = useState();
  const [load, setLoading] = useState(false);
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );

  const fetchRepo = async () => {
    setLoading(true);

    if (data) {
      setRepo(data.repository);
    }

    if (error) console.log("Error: ", error);

    setLoading(loading);
  };

  useEffect(() => {
    fetchRepo();
  }, [data]);

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    await fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repo,
    load,
    refetch: fetchRepo,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useGeRepository;
