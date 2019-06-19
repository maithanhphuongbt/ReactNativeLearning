import React, { Component } from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native';

export default class TextHyperlinkPage extends Component {
    static navigationOptions = {
        title: 'Text Hyper link',
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
            <View style={styles.container}>
                <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                        //on clicking we are going to open the URL using Linking
                        Linking.openURL('https://mp3.zing.vn');
                    }}>
                    Click Here https://mp3.zing.vn
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
    },
    hyperlinkStyle: {
        fontSize: 35,
        color: 'blue'
    }
});