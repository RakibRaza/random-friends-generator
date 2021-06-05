import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants'
import NavBar from "./components/NavBar";
export default function App() {
  console.log('rakib raza')

  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
