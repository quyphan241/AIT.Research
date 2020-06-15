import React, { Component } from 'react';
import profileService from '../../service/ProfileService';
import { Modal, Button, Header, Title, Footer } from 'react-bootstrap'



class EditProfile extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      name: "",
      carrer: "",
      about: "",
      address: "",
      email: "",
      phoneNumber: "",
      language: "",
      age: ""
    }

  }

  async componentDidMount() {
    console.log("Mounted Edit");
    const res = await profileService.list()
    console.log(res);
    if (res) {
      this.setState({
        name: res.name,
        career: res.career,
        about: res.about,
        age: res.age,
        address: res.address,
        email: res.email,
        phoneNumber: res.phoneNumber,
        language: res.language, 
        image: res.image
      })
    }
    else {
      alert("Error ==>" + res.message)
    }
  }

  async onClickUpdate() {
    console.log("Execute update");
    const res = await profileService.update(this.state)
    if (res) {
      this.hideModal()
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>" + JSON.stringify(res.data))
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="section" id="about">
        <div className="container">
          <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
            onClick={() => this.showModal()}>Edit</button>
          <div className="h4 text-center mb-4 title">Profile</div>

          <div className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>{this.state.about}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>

                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Name:</strong></div>
                    <div className="col-sm-8">{this.state.name}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">career:</strong></div>
                    <div className="col-sm-8">{this.state.career}</div>
                  </div>
                  <div className="row mt-3">
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
        <Modal show={this.state.show} size="lg" >
          <Modal.Header closeButton onClick={() => this.hideModal()} >
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="name">Name</label>
                <input type="text" className="form-control"
                  value={this.state.name}
                  onChange={(value) => this.setState({ name: value.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="career">Career</label>
                <input type="text" className="form-control"
                  value={this.state.career}
                  onChange={(value) => this.setState({ career: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="text" className="form-control"
                  value={this.state.email}
                  onChange={(value) => this.setState({ email: value.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="phoneNumber">Phone Number</label>
                <input type="number" className="form-control"
                  value={this.state.phoneNumber}
                  onChange={(value) => this.setState({ phoneNumber: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="age">Age</label>
                <input type="text" className="form-control"
                  value={this.state.age}
                  onChange={(value) => this.setState({ age: value.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="text" className="form-control"
                  value={this.state.email}
                  onChange={(value) => this.setState({ email: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3" >
                <label for="name">Address</label>
                <input type="text" className="form-control"
                  value={this.state.address}
                  onChange={(value) => this.setState({ address: value.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3" >
                <label for="name">Image</label>
                <input type="text" className="form-control"
                  value={this.state.image}
                  onChange={(value) => this.setState({ image: value.target.value })}
                />
              </div>
            </div>
         
            <div className="row">
              <div className="col-md-12 mb-3" >
                <label for="name">About</label>
                <textarea type="text" className="form-control"
                  value={this.state.about}
                  onChange={(value) => this.setState({ about: value.target.value })}
                >
                </textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.hideModal()}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => this.onClickUpdate()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}


export default EditProfile;