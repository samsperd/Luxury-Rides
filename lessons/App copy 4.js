import React from 'react';
import { StyleSheet, Button, SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {

  // const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="red"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
