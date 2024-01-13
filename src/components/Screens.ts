import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Main from './Main/Main/Main';

export function registerScreens(store) {
  Navigation.registerComponentWithRedux('Main', () => Main, Provider, store);
}
