import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import AppBar from "./AppBar";
import theme from "../theme";

import RepositoryList from "./RepositoryList";
import RepositoryView from "./RepositoryView";
import SignIn from "./SignIn";

export const Main = () => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Routes>
          <Route
            path="/repository/:repoId"
            element={<RepositoryView />}
            exact
          />
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
