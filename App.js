import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import Dashboard from './screens/Dashboard';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import React, { Component } from 'react';
import SplashPage from './screens/SplashPage';
import Rides from './screens/Rides';
// import ApolloClient from 'apollo-boost';
// import { gql } from 'apollo-boost';

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