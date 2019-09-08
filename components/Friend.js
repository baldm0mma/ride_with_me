import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

export const Friend = ({friend}) => {
  return (
    <View id={friend.id} style={styles.friendContainer}>
      <Image
        style={styles.friends}
        source={friend.image}
      />
      <Text>{friend.userName}</Text>
    </View>
  );
};

export const mapStateToProps = ({ profileData, isLoggedIn }) => ({
  profileData,
  isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: bool => dispatch(toggleLogin(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friend);
