import React, { Component } from 'react';
import API from './API/api';
import WeatherList from './weatherList/weatherList';

export default class App extends Component {
  state = {
    current: {},
    location: {},
  };

  componentDidMount() {
    API().then(res => this.setState({ current: res.current }));
    API().then(res => this.setState({ location: res.location }));
  }

  // getData = async () => {
  //   await API().then(res => this.setState({ data: res }));
  // };



  render() {
    const { current, location  } = this.state;

    return (
      <div className="App">
        <h2>Hello bro</h2>
        <WeatherList current={current} location={location}  />
      </div>
    );
  }
}
