import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import Dashboard from './screens/Dashboard';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import HomePage from './screens/HomePage';
import React, { Component } from 'react';
import SplashPage from './screens/SplashPage';
import Rides from './screens/Rides';

const store = createStore(rootReducer, composeWithDevTools());

const tabStack = createMaterialBottomTabNavigator(
  {
    Dash: { screen: Dashboard },
    Rides: { screen: Rides }
  },
  {
    initialRouteName: 'Dash',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#232323' }
  }
);

const rootStack = createStackNavigator(
  {
    Login: { screen: SplashPage },
    Dash: { screen: tabStack }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
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
