import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

export default function App() {

  // const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={[ styles.container, containerStyle ]}>
      <Button
        title="Click Me"
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "red" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
