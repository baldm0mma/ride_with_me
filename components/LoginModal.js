import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, Input, Button } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';

export class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    };
  }

  handleEstablishedUser = () => {
    
  };

  render = () => {
    return (
      <View>
        <Overlay
          windowBackgroundColor='rgba(255, 255, 255, .2)'
          overlayBackgroundColor='#e6e6e6'
          height='65%'
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
                // disabled={true}
                type='solid'
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  };
}

export const mapStateToProps = ({ profileData }) => ({
  profileData
});

// export const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(LoginModal);

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 18
  },
  button: {
    padding: 20
  }
});
