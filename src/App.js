import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Containers/Header";
import Mypage from './pages/Mypage';
import Main from './pages/Main';


class App extends Component {
  render(){
    return(
      <div className="App">
          <Router>
            <Route path='/main' component={ Header } />
            <Switch>
              <Route path='/main' component={ Main } />
              <Route path='/mypage' component={ Mypage } />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
