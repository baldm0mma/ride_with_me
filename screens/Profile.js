import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from 'react-native';

export class Profile extends Component {
  render = () => {
    return (
      <View style={styles.page}>
        <ImageBackground
          style={styles.avatarBackground}
          source={require('../assets/avatar-background.jpg')}
        >
          <Text style={styles.userName}>Jev Forsberg</Text>
          <Image
            style={styles.avatar}
            source={require('../assets/Javatar.jpg')}
          ></Image>
        </ImageBackground>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>
            For the ultimate downhill blast, ride to the top of Hickory Mountain
            Loop, take a minute to catch your breath and prepare to smile all
            the way to the parking lot, barely needing to pedal. The ending is
            real rutted out, so be careful not to lock up your tire and make it
            worse.
          </Text>
        </View>
        <View style={styles.friendLabelContainer}>
          <Text style={styles.friendLabelText}>
            Jev's Friends
          </Text>
        </View>
        <View style={styles.friendList}>
          <Image
            style={styles.friends}
            source={require('../assets/001-helmet.png')}
          />
          <Image
            style={styles.friends}
            source={require('../assets/002-helmet.png')}
          />
          <Image
            style={styles.friends}
            source={require('../assets/003-helmet.png')}
          />
          <Image
            style={styles.friends}
            source={require('../assets/004-helmet.png')}
          />
          <Image
            style={styles.friends}
            source={require('../assets/005-helmet.png')}
          />
          <Image
            style={styles.friends}
            source={require('../assets/006-helmet.png')}
          />
        </View>
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
    top: 120,
    left: 130,
    height: 150,
    width: 150,
    borderRadius: 75
  },
  avatarBackground: {
    width: '100%',
    height: '60%',
    backgroundColor: 'blue'
  },
  userName: {
    top: 60,
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  aboutContainer: {
    position: 'absolute',
    top: 290,
    left: 10,
    width: '95%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 15
  },
  aboutText: {
    fontSize: 20
  },
  friendList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  friends: {
    // padding: 30,
    position: 'relative',
    // top: 50,
    // right: 30,
    left: 0,
    bottom: 0,
    // alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60 / 2
  },
  friendLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  friendLabelText: {
    fontSize: 30,
    color: 'white'
  }
});
