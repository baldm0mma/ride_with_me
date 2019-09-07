import React, { Component } from 'react';
import { Stylesheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

export class Ride extends Component {
  render = () => {
    return (
      <View>
        <Image source={require('../assets/001-motoride.jpg')} />
        <Text>Ride Date</Text>
        <Text>Ride Type</Text>
      </View>
    );
  };
}

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(Ride);
