import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Button } from 'react-native-elements';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { toggleRideAttendance } from '../actions';

export class RideModal extends Component {
  render = () => {
    return (
      <View>
        <Overlay
          borderRadius={10}
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='white'
          height='22%'
          width='50%'
          isVisible={true}
        >
          <ImageBackground
            source={require('../assets/topographyBackground.png')}
            style={{ position: 'relative', height: '100%', width: '100%' }}
          >
            <View>
              <Text style={styles.updateMessage}>Your ride has been updated!</Text>
            </View>
            <View style={{ width: '50%', left: 50, top: 55 }}>
              <Button
                title='Done'
                type='solid'
                onPress={() => this.props.toggleRideAttendance(false)}
              />
            </View>
          </ImageBackground>
        </Overlay>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  updateMessage: {
    top: 20,
    textAlign: 'center',
    fontSize: 24
  }
});

export const mapStateToProps = ({ rideAttendance }) => ({
  rideAttendance
});

export const mapDispatchToProps = dispatch => ({
  toggleRideAttendance: bool => dispatch(toggleRideAttendance(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RideModal);
