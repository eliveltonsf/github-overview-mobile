import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello World!</Text>
    </View>
  );
}

console.tron.log('Hello world!');
console.tron.warn('Hello world!');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
