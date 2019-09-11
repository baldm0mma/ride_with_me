import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Linking
} from 'react-native';
import { connect } from 'react-redux';

export class Ride extends Component {
  render = () => {
    const {
      id,
      title,
      description,
      distance,
      rideCategory,
      duration,
      date,
      imageLink,
      mapLink
    } = this.props.ride;
    console.log(mapLink);
    return (
      <TouchableOpacity key={id}>
        <View style={styles.rideContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.rideImage} source={{ uri: imageLink }} />
          <Text>Description: {description}</Text>
          <View style={styles.row}>
            <Text>Distance: {distance}</Text>
            <Text>Duration: {duration}</Text>
          </View>
          <View style={styles.row}>
            <Text>RideCategory: {rideCategory}</Text>
            <Text>Date: {date}</Text>
          </View>
          <View style={styles.attending}>
            <Text>Attending?</Text>
            <Switch value={}></Switch>
          </View>
          <Text style={styles.mapLink} onPress={() => Linking.openURL(mapLink)}>Go to map</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  rideImage: {
    margin: 5,
    height: 260,
    width: '98%'
  },
  rideContainer: {
    margin: 10,
    marginTop: 50
  },
  title: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attending: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  mapLink: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24
  }
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
