import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const authenticationData = await mutate({
      variables: {
        username,
        password,
      },
    });

    return authenticationData.data.authenticate.accessToken;
  };

  return [signIn, result];
};

export default useSignIn;
