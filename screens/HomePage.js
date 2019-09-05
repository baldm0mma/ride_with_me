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
        <View style={styles.friendList}>
          <Image style={styles.friends} source={require('../assets/001-helmet.svg')}></Image>
          <Image style={styles.friends} source={require('../assets/002-helmet.svg')}></Image>
          <Image style={styles.friends} source={require('../assets/003-helmet.svg')}></Image>
          <Image style={styles.friends} source={require('../assets/004-helmet.svg')}></Image>
          <Image style={styles.friends} source={require('../assets/005-helmet.svg')}></Image>
          <Image style={styles.friends} source={require('../assets/006-helmet.svg')}></Image>
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
    justifyContent: 'space-around'
  },
  friends: {
    position: 'absolute',
    top: 70,
    right: 30,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 40
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
