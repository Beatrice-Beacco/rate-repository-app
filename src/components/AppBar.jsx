import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useApolloClient } from "@apollo/client";
import { Link } from "react-router-native";
import theme from "../theme";
import Constants from "expo-constants";
import { useNavigate } from "react-router-dom";

import useGetLoggedUser from "../hooks/useGetLoggedUser";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + theme.paddings.smallPadding,
    paddingBottom: theme.paddings.smallPadding,
    backgroundColor: theme.colors.textPrimary,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const authenticationTab = (user, storage, client, navigate) => {
  if (!user) {
    //if user is not signed in
    return (
      <>
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
        <Link to="/signup">
          <Text style={styles.text}>Sign up</Text>
        </Link>
      </>
    );
  } else {
    //if user is signed in
    return (
      <>
        <Link to="/review">
          <Text style={styles.text}>Create a review</Text>
        </Link>
        <Link to="/user_reviews">
          <Text style={styles.text}>My reviews</Text>
        </Link>
        <TouchableHighlight
          onPress={() => userLogout(storage, client, navigate)}
        >
          <Text style={styles.text}>Logout</Text>
        </TouchableHighlight>
      </>
    );
  }
};

const userLogout = (authStorage, apolloClient, navigateFunction) => {
  authStorage.removeAccessToken();
  apolloClient.resetStore();
  navigateFunction(`/`, { replace: true });
};

const AppBar = () => {
  const { user } = useGetLoggedUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.row} horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {authenticationTab(user, authStorage, apolloClient, navigate)}
      </ScrollView>
    </View>
  );
};

export default AppBar;
