import React from 'react';

const weatherList = ({ current, location }) => {
  return (
    <ul>
      <img alt="weather" src={current.weather_icons}></img>
      <li className="list-item">Temperature: {current.temperature} C</li>
      <li className="list-item">Wind speed: {current.windSpeed}m/s</li>
      <li className="list-item">Cloudcover: {current.cloudcover}%</li>
      <li className="list-item">Country: {location.country}</li>
      <li className="list-item">Region: {location.region}</li>
      <li className="list-item">Name: {location.name}</li>
      <li className="list-item">Localtime: {location.localtime}</li>
    </ul>
  );
};

export default weatherList;
