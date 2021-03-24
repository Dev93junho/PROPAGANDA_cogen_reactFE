import React, { Component } from 'react';
import Header from "./Containers/Header";
import Category from "./Containers/Category";
import Contents from './Containers/Contents';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Category />
        <Contents />


      </div>
    );
  }
}

export default App;
