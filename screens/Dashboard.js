import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import FriendEmblem from '../components/FriendEmblem';
import FriendInfoModal from '../components/FriendInfoModal';
import { setProfileData, toggleLoading, setRideData } from '../actions';
import { getData } from '../utilz/apiCalls';
import { userProfile, allRides } from '../utilz/urlz';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      listName: '',
      username: '',
      about: '',
      avatar: '',
      backgroundImage: '',
      friends: []
    };
  }
  componentDidMount = async () => {
    this.props.toggleLoading(true);
    const userData = await getData(userProfile);
    await this.props.setProfileData(userData);
    const {
      firstName,
      listName,
      username,
      about,
      avatar,
      backgroundImage,
      friends
    } = this.props.profileData.data.user;
    this.setState({
      firstName,
      listName,
      username,
      about,
      avatar,
      backgroundImage,
      friends
    });
    this.props.toggleLoading(false);
    const rideData = await getData(allRides);
    await this.props.setRideData(rideData);
  };
  displayFriends = () => {
    const { friends } = this.state;
    return friends.map(friend => <FriendEmblem friend={friend} />);
  };
  render = () => {
    const { username, about, avatar, backgroundImage } = this.state;
    return (
      <>
        {this.props.isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size='large' pointerEvents='none' />
          </View>
        )}
        {this.props.currentFriend && <FriendInfoModal />}
        <View style={{ flex: 1, backgroundColor: '#e6e6e6' }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between'
            }}
          >
            <ImageBackground
              style={styles.avatarBackground}
              source={{ uri: backgroundImage }}
            >
              <Image style={styles.avatar} source={{ uri: avatar }} />
              <Text style={styles.userName}>{username}</Text>
            </ImageBackground>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutText}>{about}</Text>
            </View>
            <View style={styles.scrollContainer}>
              <View style={styles.listLabelContainer}>
                <Text style={styles.listLabelText}>{username}'s Friends</Text>
              </View>
              <ScrollView horizontal={true} style={styles.list}>
                {this.displayFriends()}
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
    backgroundColor: '#e6e6e6',
    height: '100%'
  },
  avatar: {
    top: 40,
    left: 130,
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: '#D39A2B',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  avatarBackground: {
    height: '70%',
    backgroundColor: '#e6e6e6'
  },
  userName: {
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  aboutContainer: {
    position: 'absolute',
    top: 280,
    width: '100%',
    backgroundColor: '#D39A2B',
    padding: 15,
    borderRadius: 15,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderStyle: 'dotted',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  aboutText: {
    fontSize: 20
  },
  listLabelText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    backgroundColor: '#e6e6e6'
  },
  listLabelContainer: {
    backgroundColor: '#e6e6e6'
  },
  scrollContainer: {
    marginTop: 30
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(52, 52, 52, 1)'
  },
  firstName: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
});

export const mapStateToProps = ({
  profileData,
  rideData,
  currentFriend,
  isLoading
}) => ({
  profileData,
  rideData,
  currentFriend,
  isLoading
});
export const mapDispatchToProps = dispatch => ({
  toggleLoading: bool => dispatch(toggleLoading(bool)),
  setProfileData: data => dispatch(setProfileData(data)),
  setRideData: data => dispatch(setRideData(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
