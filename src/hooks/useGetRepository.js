import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useGetUrl = (id) => {
  const [repo, setRepo] = useState();
  const [load, setLoading] = useState(false);
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      repo: id,
    },
  });

  const fetchRepo = async () => {
    setLoading(loading);

    if (data) {
      setRepo(data.repository);
    }

    if (error) console.log("Error: ", error);
  };

  useEffect(() => {
    fetchRepo();
  }, [data]);

  return { repo, load, refetch: fetchRepo };
};

export default useGetUrl;
