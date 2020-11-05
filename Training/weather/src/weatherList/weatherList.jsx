import React from 'react';
// import T from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

const weatherList = ({ data }) => {
  // const { location, current } = data;
  // console.log(data);
  console.log(data.current.temperature);
  return (
    <ul>
      {/* <li className="list-item">Temperature: ${data.current.temperature} C</li> */}
      {/* <li className="list-item">Wind speed: ${current.windSpeed} m/s</li>
      <li className="list-item">Cloudcover: ${current.cloudcover}</li>
      <li className="list-item">Country: ${location.country}</li>
      <li className="list-item">Region: ${location.region}</li>
      <li className="list-item">Name: ${location.name}</li>
      <li className="list-item">Localtime: ${location.localtime}</li>`; */}
    </ul>
  );
};

// const markup = `
//     <li class="list-item">Temperature: ${temperature} C</li>
//     <li class="list-item">Wind speed: ${windSpeed} m/s</li>
//     <li class="list-item">Cloudcover: ${cloudcover}</li>
//     <li class="list-item">Country: ${country}</li>
//     <li class="list-item">Region: ${region}</li>
//     <li class="list-item">Name: ${name}</li>
//     <li class="list-item">Localtime: ${localtime}</li>`;

export default weatherList;
