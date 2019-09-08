import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleCurrentFriend } from '../actions';

export const Friend = ({ friend, toggleCurrentFriend }) => {

  return (
    <TouchableOpacity
      key={friend.id}
      onPress={() => toggleCurrentFriend(friend.id)}
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
    margin: 10
  },
  friendName: {
    left: 20
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
)(Friend);
