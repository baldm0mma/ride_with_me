import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleCurrentFriend } from '../actions';

export const FriendIcon = ({ friend, toggleCurrentFriend }) => {

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
    marginRight: 30,
    marginTop: 25,
    height: 70,
    width: 70
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
