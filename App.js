import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./pages/RootStackScreen";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen></RootStackScreen>
    </NavigationContainer>
  );
};

export default App;
