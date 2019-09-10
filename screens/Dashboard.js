import React, { Constructor, Component } from 'react';
import { connect } from 'react-redux';
import { friendData } from '../mockData/friendsData';
import FriendIcon from '../components/FriendIcon';
import FriendModal from '../components/FriendModal';
import { rideData } from '../mockData/ridesData';
import RideIcon from '../components/RideIcon';
import { toggleLogin, setProfileData } from '../actions';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { getUsers } from '../utilz/apiCalls';
import { allUsersNames } from '../utilz/urlz';jsjs
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';

export class Dashboard extends Component {
  componentDidMount = async () => {
    const data = await getUsers(allUsersNames);
    console.log(data);
  };

  displayFriends = () => {
    return friendData.map(friend => <FriendIcon friend={friend} />);
  };

  displayRides = () => {
    return rideData.map(ride => <RideIcon ride={ride} />);
  };

  render = () => {
    return (
      <>
        {this.props.currentFriend && <FriendModal />}
        <View style={{ height: 2000, flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between'
            }}
          >
            <ImageBackground
              style={styles.avatarBackground}
              source={require('../assets/avatar-background.jpg')}
            >
              <Image
                style={styles.avatar}
                source={require('../assets/Javatar.jpg')}
              />
              <Text style={styles.userName}>Jev Forsberg</Text>
            </ImageBackground>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutText}>
                Be careful of the rock stairs relatively close to the top of
                this portion; too much speed could doom your descent on these.
                This trail ends at the intersection of Middle Earth. Small tree
                down between bottom of trail and bridge crossing. Lots of
                branches. This route is worth riding MANY times.
              </Text>
            </View>
            <View>
              <View style={styles.listLabelContainer}>
                <Text style={styles.listLabelText}>Jev's Friends</Text>
              </View>
              <ScrollView horizontal={true} style={styles.list}>
                {this.displayFriends()}
              </ScrollView>
              <View style={styles.listLabelContainer}>
                <Text style={styles.listLabelText}>Jev's Rides</Text>
              </View>
              <ScrollView horizontal={true} style={styles.list}>
                {this.displayRides()}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#dedede',
    height: '100%'
  },
  avatar: {
    top: 40,
    left: 130,
    height: 150,
    width: 150,
    borderRadius: 75
  },
  avatarBackground: {
    height: '70%'
  },
  userName: {
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  aboutContainer: {
    position: 'absolute',
    top: 280,
    width: '100%',
    backgroundColor: '#D39A2B',
    padding: 15,
    borderRadius: 15
  },
  aboutText: {
    fontSize: 20
  },
  listLabelText: {
    left: 25,
    fontSize: 30,
    color: 'black'
  }
});

export const mapStateToProps = ({
  profileData,
  rideData,
  currentFriend,
  currentRide
}) => ({
  profileData,
  rideData,
  currentFriend,
  currentRide
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: bool => dispatch(toggleLogin(bool)),
  setProfileData: data => dispatch(setProfileData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
