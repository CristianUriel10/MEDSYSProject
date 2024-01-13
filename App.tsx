import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Text } from 'react-native';
import logger from 'redux-logger';
import { reducer } from './src/redux/Store';
import { registerScreens } from './src/components/Screens';
import {Provider} from 'react-redux';

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, logger));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

registerScreens(store, Provider);

const App = () => {

  return (
    <Text>
      Holaa
    </Text>
  );
};

export default App;
