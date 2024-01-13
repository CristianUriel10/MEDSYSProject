// src/redux/Reducers.js
import { combineReducers } from 'redux';
import albumReducer from './Album/album.reducer';

const rootReducer = combineReducers({
  // Add other reducers as needed
  AlbumReducer: albumReducer,
});

export default rootReducer;
