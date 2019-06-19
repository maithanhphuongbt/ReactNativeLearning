import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePage from './src/pages/HomePage';
import NavigationPage from './src/pages/NavigationPage';
import FlatListPage from './src/pages/FlatListPage';
import DetectPlatformPage from './src/pages/DetectPlatformPage';
import GetWidthHeightDevicePage from './src/pages/GetWidthHeightDevicePage';
import TextHyperlinkPage from './src/pages/TextHyperlinkPage';
import VibrationControlPage from './src/pages/VibrationControlPage';
import RequestFocusAndKeyboardAvoidingViewPage from './src/pages/RequestFocusAndKeyboardAvoidingViewPage';

const RootStack = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  NavigationPage: {
    screen: NavigationPage,
  },
  FlatListPage: {
    screen: FlatListPage,
  },
  DetectPlatformPage: {
    screen: DetectPlatformPage
  },
  GetWidthHeightDevicePage: {
    screen: GetWidthHeightDevicePage
  },
  TextHyperlinkPage: {
    screen: TextHyperlinkPage
  },
  VibrationControlPage: {
    screen: VibrationControlPage
  },
  RequestFocusAndKeyboardAvoidingViewPage: {
    screen: RequestFocusAndKeyboardAvoidingViewPage
  }
});

const App = createAppContainer(RootStack);

export default App;
