import { useMutation, useApolloClient } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const authenticationData = await mutate({
      variables: {
        username,
        password,
      },
    });

    const token = authenticationData.data.authenticate.accessToken;

    await authStorage.setAccessToken(token);
    apolloClient.resetStore();

    return token;
  };

  return [signIn, result];
};

export default useSignIn;
