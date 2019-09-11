import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Tooltip
} from 'react-native';
import { connect } from 'react-redux';
import { toggleCurrentFriend } from '../actions';

export const FriendIcon = ({ friend, toggleCurrentFriend }) => {
  const { avatar, username, id } = friend;
  return (
    <TouchableOpacity
      key={friend.id}
      onPress={() => toggleCurrentFriend(friend.id)}
      style={{backgroundColor: '#e6e6e6'}}
    >
      <View style={styles.friendContainer}>
        <Image style={styles.friends} source={friend.image} />
        <Text style={styles.friendName}>{friend.userName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  friends: {
    marginRight: 15,
    marginTop: 15,
    height: 30,
    width: 30,
    borderRadius: 15
  },
  friendContainer: {
    margin: 10,
    backgroundColor: '#e6e6e6'
  },
  friendName: {
    left: 15
  }
});

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

export const mapDispatchToProps = dispatch => ({
  toggleCurrentFriend: num => dispatch(toggleCurrentFriend(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIcon);
