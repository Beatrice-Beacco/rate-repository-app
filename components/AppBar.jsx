import { View, StyleSheet, Pressable, Text } from "react-native";
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
});

const AppBar = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </Pressable>
  );
};

export default AppBar;
