import React, { Component } from 'react';
import Header from "./Containers/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
      </div>
    );
  }
}



export default App;
