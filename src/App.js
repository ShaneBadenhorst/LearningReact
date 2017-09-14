import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Navbar from './Navbar'
import Grid from './Grid'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Button/>
        <Grid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
