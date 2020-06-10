import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Index/Profile'
import Header from './components/Index/Header'
import About from './components/Index/About'
import Skill from './components/Index/Skill'
import Experience from './components/Index/Experience'
import Education from './components/Index/Education'
import Reference from './components/Index/Reference'
import Footer from './components/Index/Footer'


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
