import React from 'react';
import { Button } from 'react-native-elements';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import { toggleLogin, setProfileData } from '../actions';

export const SplashPage = props => {
  const handleLogin = () => {
    props.toggleLogin(true);
  };

  return (
    <>
      {props.isLoggedIn && <LoginModal navigation={props.navigation} />}
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
            <Button title='Login' type='solid' onPress={handleLogin} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    width: '100%',
    height: '100%'
  },
  logoPosition: {
    position: 'absolute',
    top: 30,
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

export const mapStateToProps = ({ profileData, isLoggedIn }) => ({
  profileData,
  isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: bool => dispatch(toggleLogin(bool)),
  setProfileData: data => dispatch(setProfileData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
