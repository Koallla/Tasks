import React from 'react';

const weatherList = ({ current, location, onChange, onClick, value }) => {
  return (
    <ul>
      <input
        className="input-city"
        placeholder="Enter city"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className="btn" type="submit" onClick={onClick}>
        Show weather
      </button>
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
