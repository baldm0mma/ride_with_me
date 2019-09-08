import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friends } from '../mockData/friendsData';
import Friend from  '../components/Friend';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';

export class Profile extends Component {
  displayFriends = () => {
    return friends.map(friend => <Friend friend={friend}></Friend>)
  };

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
        <ScrollView horizontal={true} style={styles.friendList}>
          {this.displayFriends()}
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
    top: 40,
    left: 130,
    height: 150,
    width: 150,
    borderRadius: 75
  },
  avatarBackground: {
    width: '100%',
    height: '65%'
    // backgroundColor: 'blue'
  },
  userName: {
    top: 190,
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  aboutContainer: {
    position: 'absolute',
    top: 260,
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
    top: 500
  },
  friends: {
    marginRight: 30,
    marginTop: 25,
    height: 70,
    width: 70
  },
  friendLabelContainer: {
    position: 'absolute',
    top: 480
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

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(Profile);
