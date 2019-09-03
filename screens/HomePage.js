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

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(HomePage);
