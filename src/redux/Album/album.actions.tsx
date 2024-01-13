// Types.
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_ALBUM_BY_USERS_LOADING,
  GET_ALBUM_BY_USERS_ERROR,
  GET_ALBUM_BY_USERS_SUCCESS,
  GET_ALBUM_PHOTOS_ERROR,
  GET_ALBUM_PHOTOS_LOADING,
  GET_ALBUM_PHOTOS_SUCCESS,
  GET_ALL_PHOTOS_ERROR,
  GET_ALL_PHOTOS_LOADING,
  GET_ALL_PHOTOS_SUCCESS
} from './album.types';

// Endpoints.
import {getUsers, getAlbumsByUser, getAlbumPhotos, getAllPhotos} from './album.api';

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

export const actionGetAlbumPhotos = (idAlbum) => async dispatch => {
  dispatch({
    type: GET_ALBUM_PHOTOS_LOADING,
  });
  await getAlbumPhotos(idAlbum)
    .then(response => {
      dispatch({
        type: GET_ALBUM_PHOTOS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ALBUM_PHOTOS_ERROR,
        payload: e,
      });
    });
};

export const actionGetAllPhotos = () => async dispatch => {
  dispatch({
    type: GET_ALL_PHOTOS_LOADING,
  });
  await getAllPhotos()
    .then(response => {
      dispatch({
        type: GET_ALL_PHOTOS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_ALL_PHOTOS_ERROR,
        payload: e,
      });
    });
};
