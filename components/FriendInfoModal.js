import React from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { toggleCurrentFriend } from '../actions';

export const FriendInfoModal = ({
  profileData,
  currentFriend,
  toggleCurrentFriend
}) => {
  const { friends } = profileData.data.user;
  const friend = friends.find(friend => friend.id === currentFriend);
  const { avatar, username, milesRiddenTogether } = friend;
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
          style={styles.background}
        >
          <View style={styles.boxShadow}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
          </View>
          <View style={{ top: 30 }}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.milage}>Miles Ridden Together:</Text>
            <Text style={styles.milageInfo}>{milesRiddenTogether}</Text>
          </View>
          <View style={styles.button}>
            <Button
              title='Done'
              type='solid'
              onPress={() => toggleCurrentFriend(null)}
            />
          </View>
        </ImageBackground>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  avatar: {
    top: 20,
    left: 50,
    width: 150,
    height: 150,
    borderRadius: 50,
    borderColor: '#D39A2B',
    borderWidth: 1
  },
  button: {
    width: '50%',
    left: 65,
    top: 50
  },
  milage: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: 'center'
  },
  background: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  milageInfo: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
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
