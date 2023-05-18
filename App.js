import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={() => alert("Hello World!")}/>
      <Text>Open up App.js to start working on your let's go!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});