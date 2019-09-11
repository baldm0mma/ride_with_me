import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { toggleCurrentFriend } from '../actions';

export class FriendInfoModal extends Component {
  findFriend = () => {
    const { friends } = this.props.profileData.data.user;
    return friends.find(friend => friend.id === this.props.currentFriend);
  };

  render = () => {
    const friend = this.findFriend();
    const { avatar } = friend;
    console.log(avatar);
    return (
      <View>
        <Overlay
          borderRadius={10}
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='white'
          height='48%'
          width='65%'
          isVisible={true}
        >
          <ImageBackground
            source={require('../assets/topographyBackground.png')}
            style={{ position: 'relative', height: '100%', width: '100%' }}
          >
            <View>
              <Image style={styles.avatar} source={{ uri: avatar }} />
            </View>
            <View style={{ top: 30 }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                {friend.username}
              </Text>
              <Text
                style={{ fontSize: 20, paddingTop: 20, textAlign: 'center' }}
              >
                Miles Ridden Together:
              </Text>
              <Text
                style={{ fontSize: 20, paddingTop: 20, textAlign: 'center', fontWeight: 'bold' }}
              >
                {friend.milesRiddenTogether}
              </Text>
            </View>
            <View style={{ width: '50%', left: 65, top: 50 }}>
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
    backgroundColor: 'blue',
    top: 20,
    left: 50,
    width: 150,
    height: 150,
    borderRadius: 50
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
)(FriendInfoModal);
