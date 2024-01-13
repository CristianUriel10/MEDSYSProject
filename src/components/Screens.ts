import {Navigation} from 'react-native-navigation';

import Main from './Main/Main/Main';

export function registerScreens(store, provider) {
  Navigation.registerComponentWithRedux(
    'Main',
    () => Main,
    provider,
    store,
  );
}
