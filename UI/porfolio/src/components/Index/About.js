import React, { Component } from 'react';
import profileService from '../../service/ProfileService';

class About extends Component {
  constructor()
  {
    super()
    this.state = {
      about:"",
      address:"",
      email:"",
      phoneNumber:"",
      language:"",
      age:""

    }
  }

  async componentDidMount()
  {
    console.log("Mounted Edit");
    const res = await profileService.list()
    console.log(res);
    if (res) {
       this.setState({
        about:res.about,
        age: res.age,
        address:res.address,
        email:res.email,
        phoneNumber:res.phoneNumber,
        language:res.language
       })
    }
    else {
      alert("Error ==>"+res.message)
    }
  }
  render() {
    return (
        <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>{this.state.about}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                    <div className="col-sm-8">{this.state.age}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                    <div className="col-sm-8">{this.state.email}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                    <div className="col-sm-8">{this.state.phoneNumber}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                    <div className="col-sm-8">{this.state.address}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                    <div className="col-sm-8">{this.state.language}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;