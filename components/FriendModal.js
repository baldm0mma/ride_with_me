import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image } from 'react-native';
import { friends } from '../mockData/friendsData';
import { toggleCurrentFriend } from '../actions';

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
          overlayBackgroundColor='grey'
          height='45%'
          width='65%'
          isVisible={true}
        >
          <View style={styles.avatar}>
            <Image source={friend.image} />
          </View>
          <View style={{ top: 120 }}>
            <Text
              style={{ fontSize: 30, fontWeight: 800, textAlign: 'center' }}
            >
              {friend.userName}
            </Text>
            <Text style={{ fontSize: 20, paddingTop: 20, textAlign: 'center' }}>
              Miles Ridden Together:
            </Text>
            <Text style={{ fontSize: 20, paddingTop: 20, textAlign: 'center' }}>
              {friend.milesTogether}
            </Text>
          </View>
          <View style={{ top: 150 }}>
            <Button
              style={styles.button}
              title='Done'
              type='solid'
              onPress={() => this.props.toggleCurrentFriend(null)}
            />
          </View>
        </Overlay>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  avatar: {
    top: 10,
    left: 55,
    width: 40,
    height: 40
  }
});

export const mapStateToProps = ({ currentFriend }) => ({
  currentFriend
});

export const mapDispatchToProps = dispatch => ({
  toggleCurrentFriend: num => dispatch(toggleCurrentFriend(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendModal);