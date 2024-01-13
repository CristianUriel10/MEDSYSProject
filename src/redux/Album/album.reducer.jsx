// Types.
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from './album.types';

/**
 * Object to manage the initial state for lead reducer.
 * {Object} apiActions manage the state for the endpoint.
 */
const INITIAL_STATE = {
  apiActions: {
    loading: false,
    error: '',
    success: '',
  },
  listUsers: null,
};

/**
 * Manage the initial state for lead reducer.
 * @param  {Object} state is the initial state for the reducer.
 * @param {string} type action to take.
 * @param {Object} payload response for a action.
 */
const loginReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_USERS_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case GET_USERS_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: '',
        },
        listUsers: payload,
      };

    default:
      return {...state};
  }
};

export default loginReducer;
