import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './src/redux/Reducers';
import { registerScreens } from './src/components/Screens';
import {Provider} from 'react-redux';
import Main from './src/components/Main/Main/Main';

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, logger));
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

registerScreens(store);

const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
