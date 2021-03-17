import React, { Container } from 'react';
import Header from './Containers/Header.js';
import Category from './Containers/Category.js'
import Sidebar from './Containers/Sidebar.js'
import Toast from "./Containers/Toast.js"
import { Router } from 'react-router';

<<<<<<< Updated upstream
class App extends Container{
  render() {
=======
function App() {
>>>>>>> Stashed changes
    return (
      <React.Fragment>
        <Router>
          <div className="App">
          <Header></Header>
          </div>
        </Router>
      </React.Fragment>
    )
  }


export default App;
