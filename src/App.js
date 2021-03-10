import React, { Container } from 'react';
import Navbar from './Containers/Header.js';
import Category from './Containers/Category.js'
import Sidebar from './Containers/Sidebar.js'

class App extends Container{
  constructor(props){
    super(props);
    this.state ={
      
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Category></Category>
        <Sidebar></Sidebar>



      </div>

    );
  }
}

export default App;
