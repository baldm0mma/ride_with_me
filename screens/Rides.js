import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ride from '../components/Ride';
import { toggleLogin, setProfileData, toggleLoading } from '../actions';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import RideModal from '../components/RideModal';

export class Rides extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     toggleRide: false
  //   }
  // }

  displayRides = () => {
    const { rides } = this.props.profileData.data.user;
    const { allRides } = this.props.rideData.data;
    return allRides.map(ride => <Ride ride={ride} userRides={rides} />);
  };

  render = () => {
    return (
      <>
        {this.props.rideAttendance && <RideModal />}
        <View>
          <Text style={styles.headerTitle}>Upcoming Rides</Text>
          <ScrollView>{this.displayRides()}</ScrollView>
        </View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  headerTitle: {
    // backgroundColor: '#e6e6e6',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D39A2B'
  }
});

export const mapStateToProps = ({ profileData, rideData, rideAttendance }) => ({
  profileData,
  rideData,
  rideAttendance
});

export const mapDispatchToProps = dispatch => ({
  toggleRideAttendance: bool => dispatch(toggleRideAttendance(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rides);
