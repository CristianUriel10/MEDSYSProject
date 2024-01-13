// Types.
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_ALBUM_BY_USERS_LOADING,
  GET_ALBUM_BY_USERS_ERROR,
  GET_ALBUM_BY_USERS_SUCCESS
} from './album.types';

// Endpoints.
import {getUsers, getAlbumsByUser} from './album.api';

export const actionGetUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS_LOADING,
  });
  await getUsers()
    .then(response => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_USERS_ERROR,
        payload: e,
      });
    });
};

export const actionGetAlbumsByUser = (idUser) => async dispatch => {
  dispatch({
    type: GET_ALBUM_BY_USERS_LOADING,
  });
  await getAlbumsByUser(idUser)
    .then(response => {
      dispatch({
        type: GET_ALBUM_BY_USERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ALBUM_BY_USERS_ERROR,
        payload: e,
      });
    });
};
