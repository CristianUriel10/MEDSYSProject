// Libraries.
import axios from 'axios';

/**
 * Endpoint getUsers get status
 */
export const getUsers = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  console.log('Call to Api getUsers: ');
  const answer = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return answer;
};

/**
 * Endpoint getAlbumsByUser get status
 */
export const getAlbumsByUser = async (idUser:string) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${idUser}`;
  console.log('Call to Api getAlbumsByUser: ');
  const answer = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return answer;
};
