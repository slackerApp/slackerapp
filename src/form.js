import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  render() {
    return (
      <div className="App">
          <div className="Form">
            <input onChange={(event)=>this.props.handlesearchchange(event)} placeholder="Enter phone or email" value={this.props.searchinput}></input>
            <input onClick={()=>this.props.passhadlesubmit()} type="submit"/>
          </div>
      </div>
    );
  }
}

export default Form;
