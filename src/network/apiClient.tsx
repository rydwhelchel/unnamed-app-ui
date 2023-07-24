import axios from 'axios';

// TODO: Modify baseURL to read from env variable so we can set it
//   correctly once deployed
const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
