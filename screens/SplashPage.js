import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';

export class SplashPage extends Component {
  constructor() {
    super();
    this.state = {
      mustLogIn: false
    };
  }

  handleLogin = () => {
    this.setState({ mustLogIn: true });
  };

  render = () => {
    return (
      <>
        {this.state.mustLogIn && <LoginModal />}
        <ImageBackground
          source={require('../assets/Motorcycle-Ride.jpg')}
          style={styles.imagePosition}
        >
          <View style={styles.logoPosition}>
            <Image
              style={styles.logo}
              source={require('../assets/logo.png')}
            ></Image>
            <View style={styles.button}>
              <Button title='Login' type='solid' onPress={this.handleLogin} />
            </View>
          </View>
        </ImageBackground>
      </>
    );
  };
}

const styles = StyleSheet.create({
  imagePosition: {
    width: '100%',
    height: '100%'
  },
  logoPosition: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  logo: {
    height: 150,
    width: 150
  },
  button: {
    top: 120
  }
});

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(SplashPage);
