import React, { Component } from 'react';
import { Stylesheet, View, Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { rideData } from '../mockData/ridesData';

export class Rides extends Component {
  // displayRides = () => {
  //   return rideData.map(ride => <RideIcon ride={ride} />);
  // };
  render = () => {
    return (
      <View>
        <Text>All Rides</Text>
        {/* <ScrollView>{this.displayRides}</ScrollView> */}
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
)(Rides);
