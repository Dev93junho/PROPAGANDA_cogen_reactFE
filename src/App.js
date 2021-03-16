import React, { Container } from 'react';
import Header from './Containers/Header.js';
import Category from './Containers/Category.js'
import Sidebar from './Containers/Sidebar.js'
import Toast from "./Containers/Toast.js"

class App extends Container{
  constructor(props){
    super(props);
    this.state ={
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Category></Category>
        <Sidebar></Sidebar>
        <Toast></Toast>
      </div>

    );
  }
}

export default App;
