import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './src/pages/HomePage';
import NavigationPage from './src/pages/NavigationPage';
import FlatListPage from './src/pages/FlatListPage';

const RootStack = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  NavigationPage: {
    screen: NavigationPage,
  },
  FlatListPage: {
    screen: FlatListPage,
  }
});

const App = createAppContainer(RootStack);

export default App;
