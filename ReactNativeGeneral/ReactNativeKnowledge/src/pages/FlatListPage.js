import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
} from 'react-native';

export default class FlatListPage extends Component {

    static navigationOptions = {
        title: 'Flat List Page',
        headerStyle: {
        backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };

    constructor() {
        super();
        this.state = {
        dataSource: {},
        };
    }
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v, i) => {
        return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
        });
        that.setState({
        dataSource: items,
        });
    }
    render() {
        return (
        <View style={styles.MainContainer}>
            <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
                <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
                <Image style={styles.imageThumbnail} source={{uri: item.src}} />
                </View>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
