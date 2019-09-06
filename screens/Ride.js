import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export class Ride extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/001-motoride.jpg')}/>
                <Text>Ride Date</Text>
                <Text>Ride Description</Text>
            </View>
        )
    }
}

export default Ride;