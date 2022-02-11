import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
    const user = {
      username,
      password,
    };
    const signInData = await mutate({
      variables: {
        user,
      },
    });

    if (!result.error) await signIn(user);

    return signInData;
  };

  return [signUp, result];
};

export default useSignUp;
