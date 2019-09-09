import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export const RideIcon = ({ ride, toggleCurrentRide }) => {
  return (
    <TouchableOpacity key={ride.id} onPress={() => toggleCurrentRide(ride.id)}>
      <View style={styles.rideContainer}>
        <Text style={styles.title}>{ride.title}</Text>
        <Image style={styles.rideImage} source={ride.imageLink} />
        <Text>{`On ${ride.date}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rideImage: {
    marginRight: 30,
    marginTop: 5,
    height: 70,
    width: 100
  },
  rideContainer: {
    margin: 10
  },
  title: {
    left: 35
  }
});

// export const mapStateToProps = ({ currentRide }) => ({
//   currentRide
// });

export const mapDispatchToProps = dispatch => ({
  toggleCurrentRide: num => dispatch(toggleCurrentRide(num))
});

export default connect(
  null,
  mapDispatchToProps
)(RideIcon);
