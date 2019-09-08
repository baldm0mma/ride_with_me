import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image } from 'react-native';
import { friends } from '../mockData/friendsData';

export class FriendModal extends Component {
  findFriend = () => {
    return friends.find(friend => friend.id === this.props.currentFriend);
  };

  handleEstablishedUser = () => {
    // POST call to backend, and recieve back an ID if successful
    this.clearInputs();
  };

  render = () => {
    const friend = this.findFriend();
    return (
      <View>
        <Overlay
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='#e6e6e6'
          height='50%'
          isVisible={true}
        >
          <View>
            <Image source={friend.image} />
          </View>
        </Overlay>
      </View>
    );
  };
}

export const mapStateToProps = ({ currentFriend }) => ({
  currentFriend
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(FriendModal);
