import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SplashPage } from './screens/SplashPage';
import { HomePage } from './screens/HomePage';

const RootStack = createStackNavigator(
  {
    Splash: SplashPage,
    Home: HomePage
  },
  {
    initialRouteName: 'Splash'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
