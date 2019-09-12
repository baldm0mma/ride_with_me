import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';
import { toggleLogin } from '../actions';

export class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    };
  }

  clearInputs = () => {
    this.setState({ userName: '' });
    this.setState({ password: '' });
  };

  handleEstablishedUser = () => {
    this.props.toggleLogin(false);
    this.clearInputs();
    this.props.navigation.navigate('Dash');
  };

  render = () => {
    return (
      <View>
        <Overlay
          borderRadius={10}
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='#e6e6e6'
          height='63%'
          isVisible={true}
        >
          <View>
            <View>
              <Text style={styles.title}>Already a user? Sign in here.</Text>
            </View>
            <Input
              placeholder='username'
              name='userName'
              autoFocus={true}
              value={this.state.userName}
              onChangeText={text => this.setState({ userName: text })}
            ></Input>
            <Input
              placeholder='password'
              name='password'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            ></Input>
            <View>
              <Button
                style={styles.button}
                title='Sign In'
                type='solid'
                onPress={this.handleEstablishedUser}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.title}>
                New to Ride-With-Me? Make an account!
              </Text>
            </View>
            <Input placeholder='full name'></Input>
            <Input placeholder='email'></Input>
            <Input placeholder='username'></Input>
            <Input placeholder='password' secureTextEntry={true}></Input>
            <View>
              <Button
                style={styles.button}
                title='Create Account'
                type='solid'
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 18
  },
  button: {
    padding: 20
  }
});

export const mapDispatchToProps = dispatch => ({
  toggleLogin: bool => dispatch(toggleLogin(bool))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
