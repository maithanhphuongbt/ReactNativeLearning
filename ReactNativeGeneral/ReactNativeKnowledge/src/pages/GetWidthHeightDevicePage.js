import React, {Component} from 'react';
import {View, StyleSheet, Button, Dimensions} from 'react-native';

export default class GetWidthHeightDevicePage extends Component {
    static navigationOptions = {
        title: 'Get Width Height Device Page',
        headerStyle: {
        backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
    GetHeight = () => {
        const Height = Dimensions.get('window').height;
        alert('Device Height: ' + Height);
    };
    GetWidth = () => {
        const Width = Dimensions.get('window').width;
        alert('Device Width: ' + Width);
    };
    render() {
        return (
        <View style={styles.MainContainer}>
            <View style={styles.ButtonStyle}>
                <Button
                    title="Click Here To Show Device Height"
                    onPress={this.GetHeight}
                />
            </View>
            <View style={styles.ButtonStyle}>
                <Button
                    title="Click Here To Show Device Width"
                    onPress={this.GetWidth}
                />
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        margin: 10,
    },
    ButtonStyle: {
        margin: 10,
    },
});
