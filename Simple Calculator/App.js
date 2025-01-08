import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/calculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // equal space
  },
});

export default App;

