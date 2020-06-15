import React, { Component } from 'react';
import experienceService from '../../service/ExperienceService';
import EditExperience from '../edit/EditExperience';
import { Modal, Button } from "react-bootstrap";


class Experience extends Component {

  constructor() {
    super()
    this.state = {
      listExperience: [],
      showEditModal: false,
      experience: {company:"", period:"",  }
    }
  }

  showModal = () => {
    this.setState({ showEditModal: true });
  };

  hideModal = () => {
    this.setState({ showEditModal: false });
  };


  async componentDidMount() {
    console.log("Mounted list");
    const res = await experienceService.list()
    console.log(res);
    if (res) {
      this.setState({ listExperience: res })
      console.log(this.state.listExperience[1],"fhdfkgjhdk")
    }
    else {
      alert("Error ==>" + res.message)
    }
  }

  render() {
    return (
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          {
            this.state.listExperience.map((data, i) => {
              return (
                <div className="card">
                  {/* <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
                    onClick={() => this.showModal()}>Edit</button> */}
                  <div className="row">
                    <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                      <div className="card-body cc-experience-header">
                        <p>{data.period}</p>
                        <div className="h5">{data.company}</div>
                      </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                      <div className="card-body">
                        <div className="h5">{data.position}</div>
                        <p style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>{data.description}</p>
                      </div>
                    </div>
                  </div>
                  <Modal show={this.state.showEditModal}>
                    <Modal.Header closeButton onClick={() => this.hideModal()}>
                      <Modal.Title>Edit Experience {i} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label for="name">Company</label>
                          <input type="text" className="form-control"
                            value={data.company}  onChange={(value) => this.setState({ listExperience: value.target.value })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label for="name">Period</label>
                          <input type="text" className="form-control"
                            value={data.period}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label for="name">Position</label>
                          <input type="text" className="form-control"
                            value={data.position}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label for="name">Description</label>
                          <input type="text" className="form-control"
                            value={data.description}
                          />
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
              ) 
            })
          }
        </div>
      </div>

    );
  }


}
export default Experience;