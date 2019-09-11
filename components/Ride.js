import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Linking,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import FriendIcon from '../components/FriendIcon';

export class Ride extends Component {
  getRideToggle = () => {
    const { userRides } = this.props;
    return userRides.find(ride => ride.id === this.props.ride.id);
  };
  
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
    return (
      <TouchableOpacity onPress={() => Linking.openURL(mapLink)}>
        <View key={id} style={styles.rideContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.rideImage} source={{ uri: imageLink }} />
          <Text style={{ textAlign: 'center' }}>
            Description: {description}
          </Text>
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
            <Switch value={this.getRideToggle() ? true : false}></Switch>
          </View>
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
    textAlign: 'center'
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
