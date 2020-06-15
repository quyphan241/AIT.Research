import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfile from '../edit/EditProfile'
import EditExperience from './EditExperience';
import EditEducation from './EditEducation';
import EditRefer from './EditRefer';
import EditSkill from './EditSkill';
import { Link } from "react-router-dom";




class Edit extends Component {
  render() {
    return (
      <div className="Edit">
        <h1>Edit Information</h1>
        <div className="row">
          <Link className="btn btn-outline-success float-left" to="/">Back to Porfolio Page</Link>
        </div>
        <div className="row">
          <div className="col-md-6">
            <EditProfile />
          </div> 
          <div className="col-md-6">
            <EditSkill />

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <EditExperience />
          </div>
          <div className="col-md-6">
            <EditEducation />
          </div>

        </div>
        <div className="row justify-content-md-center" >
          <div className="col-md-7">
            <EditRefer />
          </div>
        </div>

      </div>
    );
  }
}


export default Edit;
