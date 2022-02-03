import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";

export default function App() {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <RepositoryList />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
  },
});
