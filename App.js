import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import { Profile } from './screens/Profile';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import HomePage from './screens/HomePage';
import React, { Component } from 'react';
import SplashPage from './screens/SplashPage';
import Ride from './screens/Ride';

const store = createStore(rootReducer, composeWithDevTools());

const tabStack = createMaterialBottomTabNavigator(
  {
    Dashboard: { screen: HomePage },
    Profile: { screen: Profile },
    Ride: { screen: Ride }
  },
  {
    initialRouteName: 'Dashboard',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#232323' }
  }
);

const rootStack = createStackNavigator(
  {
    Login: { screen: SplashPage },
    Dashboard: {
      screen: tabStack,
      navigationOptions: {
        // title: 'Log Out',
        headerLeft: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(rootStack);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
