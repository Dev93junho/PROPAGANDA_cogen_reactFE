import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Containers/Header";
import Category from "./Containers/Category";
import Contents from './Containers/Contents';
import Mypage from './pages/Mypage';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <div className="App-body">
          <Router>

          </Router>

       </div>
      </div>
    );
  }
}

export default App;
