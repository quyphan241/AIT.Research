import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../Index/About'
import EditProfile from '../edit/EditProfile'
import EditExperience from './EditExperience';


class Edit extends Component {
  render() {
    return (
      <div className="App">
        <EditProfile/>
        <EditExperience/>
      </div>  
    );
  }
}


export default Edit;
