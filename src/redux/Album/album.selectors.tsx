// Selector for lead reducer.

/**
 * Get the status of the login.
 * @param  {Object} state reducer data for update hermes properties..
 */
export const getLoadingStatus = state => state.AlbumReducer?.apiActions?.loading;

export const getErrorStatus = state => state.loginReducer?.apiActions?.error;

export const getSuccessStatus = state => state.AlbumReducer?.apiActions?.success;

export const getListUsers = state => state.AlbumReducer?.listUsers;

export const getAlbumByUsers = state => state.AlbumReducer?.albumByUser;

export const getAllPhotos = state => state.AlbumReducer?.allPhotos;

export const getAlbumPhotos = state => state.AlbumReducer?.albumPhotos;