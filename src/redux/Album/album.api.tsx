// Libraries.
import axios from 'axios';

/**
 * Endpoint biometrics get status
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
