import React, { Component } from 'react';
import Header from "./Containers/Header";
import Category from "./Containers/Category";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Category />

      </div>
    );
  }
}

export default App;
