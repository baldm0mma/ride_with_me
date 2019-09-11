import React from 'react';
import { connect } from 'react-redux';
import { Overlay } from 'react-native-elements';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { toggleCurrentFriend } from '../actions';

export const LoadingModal = () => {
  return (
    <View>
      <Overlay
        borderRadius={10}
        windowBackgroundColor='rgba(255, 255, 255, .2)'
        overlayBackgroundColor='white'
        height='10%'
        width='10%'
        isVisible={true}
      >
        <ActivityIndicator size='large' color='black' />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
)(LoadingModal);
