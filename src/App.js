import React, { Container } from 'react';
import Header from './Containers/Header.js';
import Category from './Containers/Category.js'

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


      </div>

    );
  }
}

export default App;
