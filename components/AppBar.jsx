import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + theme.paddings.smallPadding,
    paddingLeft: theme.paddings.smallPadding,
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
    justifyContent: "space-around",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.row} horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
