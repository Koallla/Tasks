const axios = require('axios');

const params = {
  access_key: 'e8278975abb258561367cab2590794a3',
  query: 'fetch:ip',
};

const API = () => {
  return axios
    .get('http://api.weatherstack.com/current', { params })
    .then(response => response.data);
};

export default API;
