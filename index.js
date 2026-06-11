/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// Legacy name — remove after a clean native rebuild (npx react-native run-ios)
AppRegistry.registerComponent('CascadesGuestStay', () => App);
