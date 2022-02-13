import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { LOGGED_USER } from "../graphql/queries";

const useGetLoggedUser = (includeReviews = false) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, error, load } = useQuery(LOGGED_USER, {
    variables: {
      includeReviews,
    },
  });

  const fetchUser = async () => {
    setLoading(load);

    console.log(data);

    if (data) {
      setUser(data.me);
    }

    if (error)
      throw new Error("An error in the fetching of the logged user", error);
  };

  useEffect(() => {
    fetchUser();
  }, [data]);

  return { user, loading, refetch: fetchUser };
};

export default useGetLoggedUser;
