import React, { Component } from 'react';
import API from './API/api';
import WeatherList from './weatherList/weatherList';

export default class App extends Component {
  state = {
    data: '',
  };

  componentDidMount() {
    API().then(res => this.setState({ data: res }));
  }

  // getData = async () => {
  //   await API().then(res => this.setState({ data: res }));
  // };

  render() {
    const { data } = this.state;
    console.log(data.current);

    return (
      <div className="App">
        <h2>Hello bro</h2>
        <WeatherList data={data} />
      </div>
    );
  }
}
