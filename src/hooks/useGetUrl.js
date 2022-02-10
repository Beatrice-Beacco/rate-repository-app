import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useGetUrl = (id) => {
  const [url, setUrl] = useState();
  const [load, setLoading] = useState(false);
  const query = useQuery(GET_REPOSITORY, {
    variables: {
      repo: id,
    },
  });

  const { data, error, loading } = query;

  const fetchRepo = async () => {
    setLoading(loading);

    if (data) {
      setUrl(data.repository.url);
    }

    if (error) console.log("Error: ", error);
  };

  useEffect(() => {
    fetchRepo();
  }, [data]);

  return { url, load, refetch: fetchRepo };
};

export default useGetUrl;
