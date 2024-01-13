// Libraries.
import axios from 'axios';

/**
 * Endpoint biometrics get status
 */
export const getUsers = async (userId, deviceId) => {
  const url = `www.google.com`;
  console.log('Call to Api biometricsStatus: ');
  const answer = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return answer;
};
