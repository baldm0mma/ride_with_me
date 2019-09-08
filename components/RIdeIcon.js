import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


export const Ride = ({ ride }) => {

  return (
    <TouchableOpacity
      key={ride.id}
      onPress={() => toggleCurrentRide(ride.id)}
    >
      {/* <View style={}>
        <Image style={} source={ride.image} />
        <Text style={}>{}</Text>
      </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export const mapStateToProps = ({ currentRide }) => ({
  currentRide
});

export const mapDispatchToProps = dispatch => ({
  toggleCurrentRide: num => dispatch(toggleCurrentRide(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ride);
