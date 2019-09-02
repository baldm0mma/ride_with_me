import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends Component {
  render = () => {
    return (
      <View>
        <View>
          <Image
            style={styles.avatar}
            source={require('../assets/Javatar.jpg')}
          ></Image>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={require('../assets/Javatar.jpg')}
          ></Image>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100
  }
});
