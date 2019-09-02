import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

export class SplashPage extends Component {
  render = () => {
    return (
      <ImageBackground
        source={require('../assets/Motorcycle-Ride.jpg')}
        style={styles.imagePosition}
      >
        <View style={styles.titlePosition}>
          <Text style={styles.titleStyle}>Ride With Me</Text>
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
  titlePosition: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 50,
    color: '#343434',
    fontWeight: '900'
  },
  button: {
    paddingTop: 300
  }
});
