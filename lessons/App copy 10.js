import React, { useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView, StatusBar, View, Platform, TouchableOpacity } from 'react-native';

export default function App() {

  const [message, setMessage] = useState('Login Here');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.placeOverOne}>
          <Image
            source={require('./assets/example_image.jpg')}
            style={styles.imageContent}
          />
          {/* Top Content */}
          <View style={styles.placeOverTwo}>
              <Image
                source={require('./assets/icon.png')}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.topText}>
                { message }
              </Text>
          </View>

          {/* Login and Register Content */}
          <View style={styles.setsOfButtons} >
            <TouchableOpacity style={ styles.loginButton } onPress={() => setMessage('Login Here')}>
              <Text style={{ color: 'black', fontSize: 18 }}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.registerButton } onPress={() => setMessage('Register Here')}>
              <Text style={{ color: 'white', fontSize: 18 }}> Register </Text>
            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageContent: {
    flex: 1,
    resizeMode: 'cover',
  },
  placeOverOne: {
    flex: 1,
    alignItems: 'center',
  },
  placeOverTwo: {
    top: 50,
    position: 'absolute',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  registerButton: {
    backgroundColor: 'red',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  topText: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  setsOfButtons: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});
