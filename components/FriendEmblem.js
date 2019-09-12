import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleCurrentFriend } from '../actions';

export const FriendEmblem = ({ friend, toggleCurrentFriend }) => {
  const { avatar, username, id } = friend;
  return (
    <TouchableOpacity
      key={id}
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
    borderRadius: 35,
    borderColor: '#D39A2B',
    borderWidth: 1,
  },
  friendContainer: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  friendName: {
    width: 83
  }
});

export const mapDispatchToProps = dispatch => ({
  toggleCurrentFriend: num => dispatch(toggleCurrentFriend(num))
});

export default connect(
  null,
  mapDispatchToProps
)(FriendEmblem);
