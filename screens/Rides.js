import React from 'react';
import { connect } from 'react-redux';
import Ride from '../components/Ride';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import RideModal from '../components/RideModal';

export const Rides = ({ profileData, rideData, rideAttendance }) => {
  displayRides = () => {
    const { rides } = profileData.data.user;
    const { allRides } = rideData.data;
    return allRides.map(ride => <Ride ride={ride} userRides={rides} />);
  };

  return (
    <>
      {rideAttendance && <RideModal />}
      <View>
        <Text style={styles.headerTitle}>Upcoming Rides</Text>
        <ScrollView>{this.displayRides()}</ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
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

export default connect(
  mapStateToProps,
  null
)(Rides);
