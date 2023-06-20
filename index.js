/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Usage_main from './components/usage/Usage_main';
import Main from './components/Smarthome/Main';
import Lamp from './components/Smarthome/Lamp';
import Lampmain from './components/Lamp/Lampmain';
// AppRegistry.registerComponent(appName, () => App);

//AppRegistry.registerComponent(appName, () => Usage_main);

//AppRegistry.registerComponent(appName, () => Main);
//AppRegistry.registerComponent(appName, () => Lamp);
AppRegistry.registerComponent(appName, () => Lampmain);
