import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Containers/Header";
import Category from "./Containers/Category";
import Contents from './Containers/Contents';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <div className="App-body">
            <Category />
            <Contents />
       </div>



      </div>
    );
  }
}

export default App;
