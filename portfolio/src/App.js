import React from 'react';
// import './App.css';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home.js'
import About from './About/About.js'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
