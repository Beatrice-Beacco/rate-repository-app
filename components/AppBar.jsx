import { View, StyleSheet, Pressable, Text } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight + theme.paddings.smallPadding,
    paddingLeft: theme.paddings.smallPadding,
    paddingBottom: theme.paddings.smallPadding,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to="signin">
        <Text style={styles.text}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
