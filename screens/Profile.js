import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';

export class Profile extends Component {
  render = () => {
    return (
      <View style={styles.page}>
        <ImageBackground
          style={styles.avatarBackground}
          source={require('../assets/avatar-background.jpg')}
        >
          <Image
            style={styles.avatar}
            source={require('../assets/Javatar.jpg')}
          ></Image>
          <Text style={styles.userName}>Jev Forsberg</Text>
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
          <Text style={styles.friendLabelText}>Jev's Friends</Text>
        </View>
        <ScrollView
          horizontal={true}
          // pagingEnabled={true}
          style={styles.friendList}
        >
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/001-helmet.png')}
            />
            <Text>Friend 1</Text>
          </View>
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/002-helmet.png')}
            />
            <Text>Friend 2</Text>
          </View>
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/003-helmet.png')}
            />
            <Text>Friend 3</Text>
          </View>
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/004-helmet.png')}
            />
            <Text>Friend 4</Text>
          </View>
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/005-helmet.png')}
            />
            <Text>Friend 5</Text>
          </View>
          <View style={styles.friendContainer}>
            <Image
              style={styles.friends}
              source={require('../assets/006-helmet.png')}
            />
            <Text>Friend 6</Text>
          </View>
        </ScrollView>
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
    left: 130,
    height: 150,
    width: 150,
    borderRadius: 75
  },
  avatarBackground: {
    width: '100%',
    height: '65%',
    // backgroundColor: 'blue'
  },
  userName: {
    top: 220,
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  aboutContainer: {
    position: 'absolute',
    top: 290,
    left: 10,
    width: '95%',
    backgroundColor: '#D39A2B',
    padding: 15,
    borderRadius: 15
  },
  aboutText: {
    fontSize: 20
  },
  friendList: {
    flex: 1,
    position: 'absolute',
    top: 530,
  },
  friends: {
    marginRight: 30,
    marginTop: 25,
    height: 70,
    width: 70
  },
  friendLabelContainer: {
    position: 'absolute',
    top: 510,
    // backgroundColor: 'purple'
  },
  friendLabelText: {
    fontSize: 30,
    color: 'white'
  },
  friendContainer: {
    margin: 10
  }
});
