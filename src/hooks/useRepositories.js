import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const { data, error, load } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
  });

  const fetchRepositories = async () => {
    setLoading(load);

    if (data) {
      setRepositories(data.repositories);
    }

    if (error)
      throw new Error(
        "An error in the fetching of repositories occurred",
        error
      );
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
