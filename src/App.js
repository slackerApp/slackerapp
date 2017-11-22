import React, { Component } from 'react';
import Form from './form.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchvalue: "",
      personresult: {}
    }
  }
  render() {
    return (
      <div className="App">
        <Form passhadlesubmit={this.handlesubmit} handlesearchchange={this.handlesearch} searchinput={this.state.searchvalue}/>
      </div>
    );
  }
  handlesearch= (event) => {
    console.log(event.target.value);
    this.setState({
   searchvalue: event.target.value
  });
  }
  handlesubmit= () =>{
    let config ={
    headers: {
      'X-FullContact-APIKey':'83be788249b82d91',
      'Content-Type': 'application/json',

      }
    };
    axios.get(`https://api.fullcontact.com/v2/person.json?email=lester@gmail.com`, config)
    .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });
  }
}

export default App;
