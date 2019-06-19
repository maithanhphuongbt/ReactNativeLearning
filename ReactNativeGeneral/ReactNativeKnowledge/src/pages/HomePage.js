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
        {id: 3, name: 'Detect Platform'},
        {id: 4, name: 'Get Width Height Device'},
        {id: 5, name: 'Text Hyperlink'},
        {id: 6, name: 'Vibration Control'},
        {id: 7, name: 'Request Focus And Keyboard Avoiding ViewPage'},
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
            case 3:
                navigate('DetectPlatformPage');
            break;
            case 4:
                navigate('GetWidthHeightDevicePage');
            break;
            case 5:
                navigate('TextHyperlinkPage');
            break;
            case 6:
                navigate('VibrationControlPage');
            break;
            case 7:
                navigate('RequestFocusAndKeyboardAvoidingViewPage');
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
