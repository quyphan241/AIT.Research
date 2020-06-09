import React, { Component } from 'react';
class Profile extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          {/* <div className="page-header-image" data-parallax="true" style="background-image: url('images/cc-bg-1.jpg');"></div> */}
          <div className="page-header-image" data-parallax="true" style={{ backgroundImage: "url('images/cc-bg-1.jpg')" }}></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image"><img src="images/anthony.jpg" alt="dmfgbm" /></div>
              <div className="h2 title">Anthony Barnett</div>
              <div>
              <p className="category text-white">Web Developer, Graphic Designer,  Photographer</p>
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