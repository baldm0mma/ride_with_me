import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SplashPage } from './screens/SplashPage';
import { HomePage } from './screens/HomePage';
import { Profile } from './screens/Profile';
import { StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const RootStack = createStackNavigator(
  {
    Splash: SplashPage
  },
  {
    initialRouteName: 'Splash'
  }
);

const tabStack = createMaterialBottomTabNavigator(
  {
    Login: { screen: SplashPage },
    Home: { screen: HomePage },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: 'Login',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#232323' }
  }
);

const AppContainer = createAppContainer(tabStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   icons: {
//     height: 20,
//     width: 20
//   }
// });
