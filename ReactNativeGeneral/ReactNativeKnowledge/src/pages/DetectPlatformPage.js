import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native';

export default class DetectPlatformPage extends Component {
    static navigationOptions = {
        title: 'Detect Platform Page',
        headerStyle: {
        backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 24,
                        textAlign: 'center',
                    }}>
                    {/*Here is Platform to get device type*/}
                    {Platform.OS === 'ios' ? 'Device is IOS' : 'Device is Android'}
                </Text>
            </View>
        )
    }
}
