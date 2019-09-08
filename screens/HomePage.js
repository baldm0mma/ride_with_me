import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

export class HomePage extends Component {
  render = () => {
    return (
      <View style={styles.page}>
        {/* <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        ></Image> */}
        <Text style={styles.headingOne}>Welcome, Jev!</Text>
        <Text style={styles.headingTwo}>Jev's Gang</Text>
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
        <Text style={styles.headingThree}>Upcoming Rides</Text>
        {/* <ScrollView style={styles.scroll}>
          <Text>Sunday 9/8 | Golden</Text>
          <Text>Sunday 9/8 | Golden</Text>
          <Text>Sunday 9/8 | Golden</Text>
          <Text>Sunday 9/8 | Golden</Text>
        </ScrollView> */}
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
  },
  friendList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 90
  },
  friends: {
    backgroundColor: 'black',
    padding: 30,
    position: 'relative',
    top: 50,
    right: 30,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60 / 2
  },
  headingOne: {
    // bottom: 0,
    // left: 200,
    // right: 0,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    top: 90
  },
  headingTwo: {
    bottom: 0,
    fontSize: 22,
    textAlign: 'center',
    top: 120
  },
  headingThree: {
    bottom: 0,
    fontSize: 22,
    textAlign: 'center',
    top: 150
  },
  scroll: {
    display: 'flex',
    justifyContent: 'center',
    top: 250,
    height: 10,
    overflow: 'hidden'
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
)(HomePage);
