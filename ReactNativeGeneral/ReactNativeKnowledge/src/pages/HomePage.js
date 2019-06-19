import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    FlatList,
    Text,
    TouchableOpacity,
    YellowBox,
} from 'react-native';

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'HomePage',
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
        let knowledges = [
        {id: 1, name: 'Navigation'},
        {id: 2, name: 'Flat List'},
        {id: 3, name: 'envelope'},
        {id: 4, name: 'etsy'},
        {id: 5, name: 'facebook'},
        {id: 6, name: 'foursquare'},
        {id: 7, name: 'github-alt'},
        {id: 8, name: 'github'},
        {id: 9, name: 'gitlab'},
        {id: 10, name: 'instagram'},
        ];

        this.setState({
        dataSource: knowledges,
        });
    }
    render() {
        YellowBox.ignoreWarnings(['ViewPagerAndroid']);
        return (
        <View style={styles.MainContainer}>
            <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={styles.itemViewKnowledge}
                    onPress={() => {
                        this.onItemClick(item.id);
                    }}
                >
                    <Text style={styles.itemTextKnowledge}>{item.name}</Text>
                </TouchableOpacity>
            )}
            numColumns={1}
            keyExtractor={item => item.id.toString()}
            />
        </View>
        );
    }

    onItemClick = itemId => {
        const {navigate} = this.props.navigation;
        switch (itemId) {
            case 1:
                navigate('NavigationPage');
            break;
            case 2:
                navigate('FlatListPage');
            break;
        }
    };
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
        flexDirection: 'row',
    },
    itemViewKnowledge: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        margin: 10,
        borderRadius: 5,
    },
    itemTextKnowledge: {
        fontSize: 25,
        color: 'black'
    },
});
