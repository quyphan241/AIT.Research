import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Education from './components/Education'
import Reference from './components/Reference'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile /> 
        <About />
        <Skill />
        <Experience />
        <Education />
        <Reference />
        <Footer />
        {/* <Template/> */}
      </div>  
    );
  }
}


export default App;
