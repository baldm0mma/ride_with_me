import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleCurrentFriend } from '../actions';

export const FriendEmblem = ({ friend, toggleCurrentFriend }) => {
  const { avatar, username, id } = friend;
  return (
    <TouchableOpacity
      key={friend.id}
      onPress={() => toggleCurrentFriend(id)}
      style={{ backgroundColor: '#e6e6e6' }}
    >
      <View style={styles.friendContainer}>
        <Image style={styles.friends} source={{ uri: avatar }} />
        <Text style={styles.friendName}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  friends: {
    marginRight: 15,
    marginTop: 15,
    height: 70,
    width: 70,
    borderRadius: 35
  },
  friendContainer: {
    margin: 10
  },
  friendName: {
    width: 83
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
)(FriendEmblem);
