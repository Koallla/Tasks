const axios = require('axios');

const API = city => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=e8278975abb258561367cab2590794a3&query=${city}`,
    )
    .then(response => response.data);
};

export default API;
