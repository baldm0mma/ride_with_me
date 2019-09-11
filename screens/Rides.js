import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ride from '../components/Ride';
import { toggleLogin, setProfileData, toggleLoading } from '../actions';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export class Rides extends Component {

  displayRides = () => {
    const { rides } = this.props.profileData.data.user;
    const { allRides } = this.props.rideData.data;
    return allRides.map(ride => <Ride ride={ride} userRides={rides} />);
  };

  render = () => {
    return (
      <View>
        <Text style={styles.headerTitle}>Upcoming Rides</Text>
        <ScrollView>{this.displayRides()}</ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export const mapStateToProps = ({
  profileData,
  rideData,
  currentFriend,
  currentRide,
  isLoading
}) => ({
  profileData,
  rideData,
  currentFriend,
  currentRide,
  isLoading
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: bool => dispatch(toggleLogin(bool)),
  toggleLoading: bool => dispatch(toggleLoading(bool)),
  setProfileData: data => dispatch(setProfileData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rides);
