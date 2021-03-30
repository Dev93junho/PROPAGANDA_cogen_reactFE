import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Containers/Header";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage"
import Series from "./pages/Series"
import Tagpage from "./pages/Tagpage"
import Subject from "./pages/Subject"
import Toppost from "./pages/Toppost"


class App extends Component {
  render(){
    return(
      <div className="App">
        <HashRouter>
          <Header />
          <Route path="/" exact={true} component={Main}/>
          <Route path="/Toppost" component={Toppost}/>
          <Route path="/Subject" component={Subject}/>
          <Route path="/Tagpage" component={Tagpage}/>
          <Route path="/Series" component={Series}/>
          <Route path="/Mypage" component={Mypage}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
