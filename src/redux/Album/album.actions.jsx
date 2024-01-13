// Types.
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from './album.types';

// Endpoints.
import {getUsers} from './album.api';

// Biometrics Status
export const actionBiometricsStatus = () => async dispatch => {
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
