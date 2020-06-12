import React, { Component } from 'react';
import experienceService from '../../service/ExperienceService';
import { Modal, Button } from "react-bootstrap";


class EditExperience extends Component {

  constructor() {
    super()
    this.state = {
      listExperience: [],
      showEditModal: false,
      showCreateModal: false,
      id: "",
      period: "",
      company: "",
      position: "",
      description: "",
    }
  }
  showCreateModal = () => {
    this.setState({ showCreateModal: true });
  }

  hideCreateModal = () => {
    this.setState({ showCreateModal: false });
  };
  showModal = async (id) => {
    this.setState({ showEditModal: true });
    const res = await experienceService.get(id)
    this.setState({
      id: res.id,
      period: res.period,
      company: res.company,
      position: res.position,
      description: res.description,
    })
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
    }
    else {
      alert("Error ==>" + res.message)
    }
  }

  async onClickUpdate() {
    console.log("Execute update");
    const res = await experienceService.update(this.state, this.state.id)
    if (res) {
      this.hideModal()
      window.location.reload()
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>" + JSON.stringify(res.data))
    }
  }

  async onClickSave() {
    console.log(this.state,"sdfuiyskfdjhskjd");
    const res = await experienceService.create(this.state);
    if (res) {
      window.location.replace("/edit");
    }
    else {
      alert("Error => " + res.message)
    }
  }
   
  render() {
    return (
      <div>
        <div className="section" id="experience">
          <div className="container cc-experience">
            <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.showCreateModal()}>Create </button>
            <div className="h4 text-center mb-4 title">Work Experience</div>
            {
              this.state.listExperience.map((data) => {
                return (
                  <div className="card">
                    <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
                      onClick={() => this.showModal(data.id)}>Edit </button>
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
                          <p>{data.description}</p>
                        </div>
                      </div>
                    </div>
                    <Modal show={this.state.showEditModal}>
                      <Modal.Header closeButton onClick={() => this.hideModal()}>
                        <Modal.Title>Edit Experience {data.id} </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            <label >Company</label>
                            <input type="text" className="form-control"
                              value={this.state.company} onChange={(value) => this.setState({ company: value.target.value })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            <label>Period</label>
                            <input type="text" className="form-control"
                              value={this.state.period} onChange={(value) => this.setState({ period: value.target.value })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            <label >Position</label>
                            <input type="text" className="form-control"
                              value={this.state.position} onChange={(value) => this.setState({ position: value.target.value })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            <label >Description</label>
                            <textarea type="text" className="form-control"
                              value={this.state.description} onChange={(value) => this.setState({ description: value.target.value })}
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
        <Modal show={this.state.showCreateModal}>
          <Modal.Header closeButton onClick={() => this.hideCreateModal()}>
            <Modal.Title>Create Experience </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label >Company</label>
                <input type="text" className="form-control" onChange={(value) => this.setState({ company: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label>Period</label>
                <input type="text" className="form-control" onChange={(value) => this.setState({ period: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label >Position</label>
                <input type="text" className="form-control" onChange={(value) => this.setState({ position: value.target.value })}

                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label >Description</label>
                <textarea type="text" className="form-control" onChange={(value) => this.setState({ description: value.target.value })}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.hideCreateModal()}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => this.onClickSave()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }


}
export default EditExperience;