import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import AppBar from "./AppBar";
import theme from "../theme";

import RepositoryList from "./RepositoryList";
import RepositoryView from "./RepositoryView";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewReview from "./NewReview";
import UserReviews from "./UserReviews";

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
          <Route path="/user_reviews" element={<UserReviews />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/review" element={<NewReview />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
