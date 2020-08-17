import axios from 'axios';
import { API_ENDPOINTS } from '../constants/config';

const client = axios.create({
  baseURL: API_ENDPOINTS,
});

const request = (options) => {
  const onSuccess = (res) => {
    // console.debug('Request Successful!', res);
    return res.data;
  };

  const onError = (err) => {
    // console.error('Request Failed!', err);

    if (err.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
      console.error('Headers:', err.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', err.message);
    }

    return Promise.reject(err.response || err.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
