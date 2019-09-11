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
import { toggleRideAttendance } from '../actions/index';

export class Ride extends Component {
  constructor() {
    super();
    this.state = {
      status: true
    };
  }

  handleValueChange = () => {
    this.setState({ status: !this.state.status });
    this.props.toggleRideAttendance(true);
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
      <TouchableOpacity
        key={id}
        style={styles.rideContainer}
        onPress={() => Linking.openURL(mapLink)}
      >
        <View key={id}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.rideImage} source={{ uri: imageLink }} />
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            Description: {description}
          </Text>
          <View style={styles.dataContainer}>
            <Text style={styles.row}>Distance: {distance}</Text>
            <Text style={styles.row}>Duration: {duration}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.row}>RideCategory: {rideCategory}</Text>
            <Text style={styles.row}>Date: {date}</Text>
          </View>
          <View style={styles.attendanceContainer}>
            <Text style={styles.attending}>Attending?</Text>
            <Switch
              style={styles.attending}
              value={this.state.status}
              onValueChange={this.handleValueChange}
            ></Switch>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  rideImage: {
    left: 18,
    height: 260,
    width: '90%',
    borderRadius: 25
  },
  rideContainer: {
    margin: 10,
    marginTop: 50,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 15,
    borderWidth: 2,
    borderColor: '#D39A2B'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    top: 5,
    marginBottom: 15
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attendanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row: {
    fontSize: 14,
    marginTop: 10
  },
  attending: {
    fontSize: 20,
    marginTop: 10
  }
});

export const mapDispatchToProps = dispatch => ({
  toggleRideAttendance: bool => dispatch(toggleRideAttendance(bool))
});

export default connect(
  null,
  mapDispatchToProps
)(Ride);
