import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Index/Header'
import Profile from '../Index/Profile'
import Skill from '../Index/Skill'
import Experience from '../Index/Experience'
import Education from '../Index/Education'
import Reference from '../Index/Reference'
import Footer from '../Index/Footer'
import About from '../Index/About'


class Index extends Component {
  render() {
    return (
        <div>
        <Header />
        <Profile /> 
        <About />
        <Skill />
        <Experience />
        <Education />
        <Reference />
        <Footer />
      </div>  
    );
  }
}


export default Index;
