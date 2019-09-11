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
    <Tooltip popover={<Text>{username}</Text>}>
      <TouchableOpacity
        key={friend.id}
        onPress={() => toggleCurrentFriend(id)}
        style={{ backgroundColor: '#e6e6e6' }}
      >
        <View style={styles.friendContainer}>
          <Image style={styles.friends} source={{ uri: avatar }} />
        </View>
      </TouchableOpacity>
    </Tooltip>
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
    margin: 10
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
