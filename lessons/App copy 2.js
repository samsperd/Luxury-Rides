import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

export default function App() {

  // const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => Alert.alert("My Title", "My Message", [
            {text: "Yes", onPress: ()=> console.log("Yes")},
            {text: "No", onPress: ()=> console.log("No")},
          ])
        }
        color="orange"
      />
    </SafeAreaView>
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
