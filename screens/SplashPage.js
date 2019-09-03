import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export class SplashPage extends Component {
  render = () => {
    return (
      <ImageBackground
        source={require('../assets/Motorcycle-Ride.jpg')}
        style={styles.imagePosition}
      >
        <View style={styles.logoPosition}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          ></Image>
          <Button
            style={styles.button}
            title='Home'
            onPress={() => this.props.navigation.navigate('Home')}
          ></Button>
        </View>
      </ImageBackground>
    );
  };
}

const styles = StyleSheet.create({
  imagePosition: {
    width: '100%',
    height: '100%'
  },
  logoPosition: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  logo: {
    height: 150,
    width: 150
  }
});
