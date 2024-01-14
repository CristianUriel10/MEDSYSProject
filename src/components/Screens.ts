import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import Main from './Main/Main';
import Gallery from './Gallery/Gallery';

export function registerScreens(store) {
  Navigation.registerComponentWithRedux('Main', () => Main, Provider, store);
  Navigation.registerComponentWithRedux(
    'Gallery',
    () => Gallery,
    Provider,
    store,
  );
}
