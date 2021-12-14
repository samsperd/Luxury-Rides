import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/example_image.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/icon.png')}
                    style={styles.logo}
                ></Image>
                <Text>
                    Order Your Luxurious Rides
                </Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.registerButton} ></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'grey'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'white'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    }
})

export default WelcomeScreen;