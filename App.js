import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import HomePage from './screens/HomePage';
import { Profile } from './screens/Profile';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import SplashPage from './screens/SplashPage';
import { StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';

const store = createStore(rootReducer);

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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   icons: {
//     height: 20,
//     width: 20
//   }
// });
