import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const { data, error, load } = useQuery(GET_REPOSITORIES);

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