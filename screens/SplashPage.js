import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import { toggleLogin, setProfileData } from '../actions';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'https://motorcycle-ride.herokuapp.com/'
// });

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });

// let data = {}

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => data = result)
//   .then(next => console.log(data));

export class SplashPage extends Component {

  componentDidMount = () => {
    const client = new ApolloClient({
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
    });
    
    let data = {}
    
    client
      .query({
        query: gql`
          {
            rates(currency: "USD") {
              currency
            }
          }
        `
      })
      .then(result => data = result)
      .then(console.log('data', data))
      .then(this.props.setProfileData(data));
  }

  handleLogin = () => {
    this.props.toggleLogin(true);
  };

  render = () => {
    return (
      <>
        {this.props.isLoggedIn && <LoginModal navigation={this.props.navigation}/>}
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
