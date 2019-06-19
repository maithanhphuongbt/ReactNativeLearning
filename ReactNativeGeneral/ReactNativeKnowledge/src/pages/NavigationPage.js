import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation';
import HomeComponent from './../component/navigation/HomeComponent';
import PromotionComponent from './../component/navigation/PromotionComponent';
import TransactionHistoryComponent from './../component/navigation/TransactionHistoryComponent';
import MyWalletComponent from './../component/navigation/MyWalletComponent';

const TabScreen = createMaterialTopTabNavigator(
    {
        Home: {
        screen: HomeComponent,
        },
        Promotion: {
        screen: PromotionComponent,
        },
        Transaction: {
        screen: TransactionHistoryComponent,
        },
        MyWallet: {
        screen: MyWalletComponent,
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
        showIcon: true,
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10,
        },
        indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 5,
        },
        },
        order: ['Home', 'Promotion', 'Transaction', 'MyWallet'],
    }
);

const Navigator = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
        headerStyle: {
            backgroundColor: '#633689',
        },
        headerTintColor: 'black',
        title: 'Navigation example',
        },
    },
});
export default createAppContainer(Navigator);





