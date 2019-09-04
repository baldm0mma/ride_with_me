import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export class Profile extends Component {
  render = () => {
    return (
      <View style={styles.page}>
        <Image style={styles.avatar} source={require('../assets/Javatar.jpg')}></Image>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#dedede',
    height: '100%'
  },
  avatar: {
    position: 'absolute',
    top: 70,
    left: 30,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 40
  }
});
