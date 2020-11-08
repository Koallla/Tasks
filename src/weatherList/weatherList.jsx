import React from 'react';
import styles from './weatherList.module.css';

const weatherList = ({ current, location, onChange, onClick, value }) => {
  return (
    <ul className={styles.list}>
      <div className={styles.img}>
        <img alt="weather" src={current.weather_icons}></img>
        <img alt="weather" src={current.weather_icons}></img>
        <img alt="weather" src={current.weather_icons}></img>
      </div>
      <div className={styles.form}>
        <form action="">
          <input
            className={styles.input_city}
            placeholder="Enter city"
            type="text"
            value={value}
            onChange={onChange}
          />
        </form>
        <button className={styles.btn} type="submit" onClick={onClick}>
          Show weather
        </button>
      </div>

      <li className={styles.list_item}>
        Temperature:{' '}
        <span className={styles.list_item_data}> {current.temperature} </span> C
      </li>
      <li className={styles.list_item}>
        Wind speed:{' '}
        <span className={styles.list_item_data}> {current.wind_speed} </span>{' '}
        m/s
      </li>
      <li className={styles.list_item}>
        Cloudcover:{' '}
        <span className={styles.list_item_data}> {current.cloudcover} </span> %
      </li>
      <li className={styles.list_item}>
        Country:{' '}
        <span className={styles.list_item_data}> {location.country} </span>{' '}
      </li>
      <li className={styles.list_item}>
        Region:{' '}
        <span className={styles.list_item_data}> {location.region} </span>{' '}
      </li>
      <li className={styles.list_item}>
        City: <span className={styles.list_item_data}> {location.name} </span>{' '}
      </li>
      <li className={styles.list_item}>
        Localtime:{' '}
        <span className={styles.list_item_data}> {location.localtime} </span>{' '}
      </li>
    </ul>
  );
};

export default weatherList;
