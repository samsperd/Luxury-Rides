import React from 'react';
import { StyleSheet, Button, SafeAreaView, StatusBar, View, Platform } from 'react-native';

export default function App() {


  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row", // Horizontal
      justifyContent: "center", // Position in the Horizontal axis
      alignItems: "center", // Position in the Vertical axis
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300
      }}></View>

      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 200
      }}></View>

      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
