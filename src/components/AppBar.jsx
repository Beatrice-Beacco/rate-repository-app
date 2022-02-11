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

const authenticationTab = (user, storage, client) => {
  if (!user) {
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
    return (
      <>
        <Link to="/review">
          <Text style={styles.text}>Create a review</Text>
        </Link>
        <TouchableHighlight onPress={() => userLogout(storage, client)}>
          <Text style={styles.text}>Logout</Text>
        </TouchableHighlight>
      </>
    );
  }
};

const userLogout = (authStorage, apolloClient) => {
  authStorage.removeAccessToken();
  apolloClient.resetStore();
};

const AppBar = () => {
  const { user } = useGetLoggedUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.row} horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {authenticationTab(user, authStorage, apolloClient)}
      </ScrollView>
    </View>
  );
};

export default AppBar;
