import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, compose, applyMiddleware } from 'redux';
import { ApolloClient, ApolloProvider } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import React, { Component } from 'react';
import HomePage from './screens/HomePage';
import Profile from './screens/Profile';
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
      <ApolloProvider store={store} client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
