import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

jest.mock('react-native-maps', () => {
  const React = require('react');
  const {View} = require('react-native');

  const MockMapView = props =>
    React.createElement(View, props, props.children);
  const MockMarker = props =>
    React.createElement(View, props, props.children);

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    PROVIDER_GOOGLE: 'google',
  };
});

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({children}) => children,
  useNavigation: () => ({
    navigate: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    popToTop: jest.fn(),
  }),
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: ({children}) => children,
    Screen: () => null,
  }),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: ({children}) => children,
    Screen: () => null,
  }),
}));
