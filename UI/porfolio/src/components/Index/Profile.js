import React, { Component } from 'react';
import profileService from '../../service/ProfileService';

class Profile extends Component {

  constructor() {
    super()
    this.state = {
      fieldName: "",
      fieldCareer: "",
      image: ""
    }
  }

  async componentDidMount() {
    console.log("Mounted Edit");
    const res = await profileService.list()
    if (res) {
      this.setState({
        fieldName: res.name,
        fieldCareer: res.career,
        image: res.image
      })
    }
    else {
      alert("Error ==>" + res.message)
    }
  }

  render() {
    console.log(this.state.image,"sdfjskj")
    return (
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div className="page-header-image" data-parallax="true" style={{ backgroundImage: "url('images/cc-bg-1.jpg')" }}></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image"><img src={this.state.image} alt="Profile" /></div>
              <div className="h2 title">{this.state.fieldName}</div>
              <div>
                <p className="category text-white">{this.state.fieldCareer}</p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Profile;