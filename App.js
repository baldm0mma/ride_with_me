import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux';
import { Profile } from './screens/Profile';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import HomePage from './screens/HomePage';
import React, { Component } from 'react';
import SplashPage from './screens/SplashPage';

const store = createStore(rootReducer, composeWithDevTools());

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
