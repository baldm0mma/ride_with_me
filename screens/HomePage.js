import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class HomePage extends Component {
  render = () => {
    return (
      <View style={styles.page}>
        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#dedede',
    height: '100%'
  },
  logo: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    height: 100,
    width: 100
  }
});
