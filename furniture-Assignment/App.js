import React from "react";
import { StyleSheet, View } from "react-native";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <View style={styles.container}>
      <Checkout />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BC8F8F",
  },
});
