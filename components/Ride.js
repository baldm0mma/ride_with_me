import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Switch, Linking } from 'react-native';
import { connect } from 'react-redux';
import FriendIcon from '../components/FriendIcon';

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
    const { userRides } = this.props;
    console.log(userRides);
    return (
      <View key={id} style={styles.rideContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.rideImage} source={{ uri: imageLink }} />
        <Text style={{ textAlign: 'center' }}>Description: {description}</Text>
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
          <Switch value={true}></Switch>
        </View>
        <Text style={styles.mapLink} onPress={() => Linking.openURL(mapLink)}>
          Go to map
        </Text>
      </View>
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
    justifyContent: 'space-between',
    fontSize: 20,
    marginTop: 10
  },
  attending: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20,
    marginTop: 10
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
