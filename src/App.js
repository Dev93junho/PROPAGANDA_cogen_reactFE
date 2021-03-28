import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Containers/Header";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage"


class App extends Component {
  render(){
    return(
      <div className="App">
        <HashRouter>
          <Header />
          <Route path="/" exact={true} component={Main}/>
          <Route path="/Mypage" component={Mypage}/>
        </HashRouter>


      </div>
    );
  }
}

export default App;
