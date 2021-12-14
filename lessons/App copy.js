import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, SafeAreaView, Image } from 'react-native';

export default function App() {

  // const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={ handlePress } >Open up App.js to start working on your app! - A really really really long text to be truncated :D</Text> */}
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableNativeFeedback onPress={() => console.log('Image Tapped')}>
      <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}>
        //
      </View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
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
