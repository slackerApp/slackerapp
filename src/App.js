import React, { Component } from 'react';
import Form from './form.js';
import EventList from './EventList.jsx';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchvalue: "",
      events: [],
      weather: []
    }
    var that = this
    this.submit = (mediaResponse) => that.setState({events: mediaResponse.data.events});
  }
  render() {
    return (
      <div className="App">
        <Form passhadlesubmit={this.handlesubmit} handlesearchchange={this.handlesearch} searchinput={this.state.searchvalue}/>
        <EventList eventList={this.state.events} weatherArr={this.state.weather}/>
      </div>
    );
  }
  handlesearch= (event) => {
    console.log('this is the target value',event.target.value);
    this.setState({
   searchvalue: event.target.value
  });
  }
  handlesubmit= (event) =>{


    console.log("test");

const API_KEY = 'c974e6818ac14f429019225bd7831b26';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const url = `${ROOT_URL}&q=${this.state.searchvalue},us`;
// const url = `${ROOT_URL}&q=new+york,us`;
    axios.get(url)
    .then((weatherResponse) => {
      console.log(weatherResponse);
      this.setState({weather:weatherResponse.data.list})

    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('https://www.eventbriteapi.com/v3/events/search/?location.address='+this.state.searchvalue+'&token=MJU7Z3DBHMMLEOBD3URN')
    // axios.get('https://www.eventbriteapi.com/v3/events/search/?location.address=newyork&token=MJU7Z3DBHMMLEOBD3URN')
    .then((mediaResponse) => {

      console.log(mediaResponse.data.events);

    this.submit(mediaResponse)
      // const events = mediaResponse.data.events
      // eventList.map((event) => <div> event.name.text</div>)

    })
    .catch(function (error) {
      console.log(error);
    });
}
}

export default App;
