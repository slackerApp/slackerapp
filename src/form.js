import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  render() {
    return (
      <div className="App">
          <div className="Form">
            <input className="searchInput" onChange={(event)=>this.props.handlesearchchange(event)} placeholder="Enter phone or email" value={this.props.searchinput}></input>
            <input className="submitBtn"onClick={(event)=>this.props.passhadlesubmit(event)} type="submit"/>
          </div>
      </div>
    );
  }
}

export default Form;
