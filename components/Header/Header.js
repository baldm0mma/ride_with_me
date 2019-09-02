import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export class Header extends Component {
  render = () => {
    return (
      <View style={styles.header}>
        <View>
          <Image
            style={styles.avatar}
            source={require('../../assets/Javatar.jpg')}
          ></Image>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          ></Image>
        </View>
        <View>
          <Button
            style={styles.button}
            title='Log Out'
            onPress={() => this.props.navigation.navigate('Home')}
          ></Button>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    backgroundColor: 'yellow'
  },
  avatar: {
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 40,
    width: 80,
    height: 80
  },
  logo: {
    marginTop: 8,
    marginLeft: 10,
    width: 80,
    height: 80
  }
});
