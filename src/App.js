import React, { Component } from 'react';
import { HashRouter as Router,Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Containers/Header";
import Main from "./pages/Main";



class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Main />

      </div>
    );
  }
}

export default App;
