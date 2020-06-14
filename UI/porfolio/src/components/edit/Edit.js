import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfile from '../edit/EditProfile'
import EditExperience from './EditExperience';
import EditEducation from './EditEducation';
import EditReference from './EditReference';
import EditRefer from './EditRefer';
import EditSkill from './EditSkill';



class Edit extends Component {
  render() {
    return (
      <div className="Edit">
        <EditProfile/>
        <EditExperience/>
        <EditEducation/>
        <EditReference/>
        <EditRefer/>
        <EditSkill/>
      </div>  
    );
  }
}


export default Edit;
