import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { toggleCurrentFriend } from '../actions';

export class FriendModal extends Component {
  findFriend = () => {
    const { friends } = this.props.profileData.data.user;
    return friends.find(friend => friend.id === this.props.currentFriend);
  };

  render = () => {
    const friend = this.findFriend();
    const { avatar } = friend;
    return (
      <View>
        <Overlay
          borderRadius={10}
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='white'
          height='45%'
          width='65%'
          isVisible={true}
        >
          <ImageBackground
            source={require('../assets/topographyBackground.png')}
            style={{ position: 'relative', height: '100%', width: '100%' }}
          >
            <View style={styles.avatar}>
              <Image source={{ url: avatar }} />
            </View>
            <View style={{ top: 120 }}>
              <Text
                style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}
              >
                {friend.username}
              </Text>
              <Text
                style={{ fontSize: 20, paddingTop: 20, textAlign: 'center' }}
              >
                Miles Ridden Together:
              </Text>
              <Text
                style={{ fontSize: 20, paddingTop: 20, textAlign: 'center' }}
              >
                {friend.milesRiddenTogether}
              </Text>
            </View>
            <View style={{ top: 150, width: '50%', left: 65 }}>
              <Button
                title='Done'
                type='solid'
                onPress={() => this.props.toggleCurrentFriend(null)}
              />
            </View>
          </ImageBackground>
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

export const mapStateToProps = ({ profileData, currentFriend }) => ({
  profileData,
  currentFriend
});

export const mapDispatchToProps = dispatch => ({
  toggleCurrentFriend: num => dispatch(toggleCurrentFriend(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendModal);
