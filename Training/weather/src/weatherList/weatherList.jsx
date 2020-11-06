/* eslint-disable no-restricted-syntax */
import React from 'react';
// import T from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

const weatherList = ({ current, location }) => {

  return (
    <ul>
      <li className="list-item">Temperature: {current.temperature} C</li>
      <li className="list-item">Wind speed: {current.windSpeed} m/s</li>
      <li className="list-item">Cloudcover: {current.cloudcover}</li>
      <li className="list-item">Country: {location.country}</li>
      <li className="list-item">Region: {location.region}</li>
      <li className="list-item">Name: {location.name}</li>
      <li className="list-item">Localtime: {location.localtime}</li>`;
    </ul>
  );
};

// caltime: {localtime}</li>`;

export default weatherList;
