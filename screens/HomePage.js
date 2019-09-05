import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

export class HomePage extends Component {
  render = () => {
    console.log('homepage', this.props)
    return (
      <View style={styles.page}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        ></Image>
        <Text style={styles.headingOne}>Welcome, Jev!</Text>
        <View style={styles.friendList}>
          <Text style={styles.headingTwo}>Jev's Gang</Text>
          <Image style={styles.friends} source={require('../assets/001-helmet.png')}></Image>
          <Image style={styles.friends} source={require('../assets/002-helmet.png')}></Image>
          <Image style={styles.friends} source={require('../assets/003-helmet.png')}></Image>
          <Image style={styles.friends} source={require('../assets/004-helmet.png')}></Image>
          <Image style={styles.friends} source={require('../assets/005-helmet.png')}></Image>
          <Image style={styles.friends} source={require('../assets/006-helmet.png')}></Image>
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
    top: 80,
    right: 30,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60/2
  },
  headingOne: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  headingTwo: {
    fontSize: 22
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
