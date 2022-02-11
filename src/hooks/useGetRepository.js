import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useGeRepository = (id) => {
  const [repo, setRepo] = useState();
  const [load, setLoading] = useState(false);
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repo: id,
    },
  });

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

  return { repo, load, refetch: fetchRepo };
};

export default useGeRepository;
