import React, { Component } from 'react';
import API from './API/api';
import WeatherList from './weatherList/weatherList';

export default class App extends Component {
  state = {
    current: {},
    location: {},
    city: 'Kiev',
  };

  componentDidMount() {
    const { city } = this.state;
    if (city) {
      API(city).then(res => this.setState({ current: res.current }));
      API(city).then(res => this.setState({ location: res.location }));
    }
  }

  handleChange = e => {
    this.setState({ city: e.target.value });
  };

  handleClick = evt => {
    evt.preventDefault();

    this.componentDidMount();
    this.setState({ city: '' });
  };

  render() {
    const { current, location, city } = this.state;

    return (
      <div className="App">
        <WeatherList
          current={current}
          location={location}
          value={city}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
