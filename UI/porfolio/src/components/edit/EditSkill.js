import React, { Component } from 'react';
import skillService from '../../service/SkillService';
import { Modal, Button } from "react-bootstrap";


class EditSkill extends Component {

  constructor() {
    super()
    this.state = {
      listSkill: [],
      name: "",
      proficiency: "",
    }
  }

  showCreateModal = () => {
    this.setState({ showCreateModal: true });
  }

  hideCreateModal = () => {
    this.setState({ showCreateModal: false });
  };

  showEditModal = async (id) => {
    this.setState({ showEditModal: true });
    const res = await skillService.get(id);
    this.setState({
      id: res.id,
      name: res.name,
      proficiency: res.proficiency
    });
  };

  hideEditModal = () => {
    this.setState({ showEditModal: false });
  };

  async componentDidMount() {
    console.log("Mounted list");
    const res = await skillService.list()
    console.log(res);
    if (res) {
      this.setState({ listSkill: res })
    }
    else {
      alert("Error ==>" + res.message)
    }
  }

  async onClickUpdate() {
    console.log("Execute update");
    const res = await skillService.update(this.state, this.state.id)
    if (res) {
      this.hideEditModal()
      window.location.reload()
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>" + JSON.stringify(res.data))
    }
  }

  async onClickSave() {
    console.log(this.state, "sdfuiyskfdjhskjd");
    const res = await skillService.create(this.state);
    if (res) {
      window.location.replace("/edit");
    }
    else {
      alert("Error => " + res.message)
    }
  }

  async onClickDelete(i, id) {
    var yes = window.confirm("Are you sure to delete this?");
    if (yes === true) {
      const res = await skillService.delete(id)
      alert("Deleted")
      const list = this.state.listSkill
      list.splice(i, 1)
      this.setState({ listSkill: list })
      window.location.replace("/edit");
    }
  }

  render() {

    return (
      <div className="section" id="skill">
        <div className="container">
          <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
            onClick={() => this.showCreateModal()}>Create </button>
          <div className="h4 text-center mb-4 title">Personal Skills</div>
          <div className="card">
            <div className="card-body">

              <div className="row">
                {
                  this.state.listSkill.map((data, i) => {
                    return (
                      <div className="col-md-6">
                        <div className="progress-container progress-primary"><span className="progress-badge">{data.name}</span>
                          <button type="button" onClick={() => this.onClickDelete(i, data.id)} className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <button className="btn btn-primary float-right float-top btn-sm" data-toggle="modal" data-target="#exampleModal"
                            onClick={() => this.showEditModal(data.id)}>Edit </button>
                          <div className="progress">
                            <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                              data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60}
                              aria-valuemin={0} aria-valuemax={100} style={{ width: +data.proficiency + '%' }} />
                          </div>
                          <span className="progress-value">{data.proficiency}%</span>

                        </div>
                        <Modal show={this.state.showEditModal}>
                          <Modal.Header closeButton onClick={() => this.hideEditModal()}>
                            <Modal.Title>Edit Reference {data.id} </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="row">
                              <div className="col-md-8 mb-3">
                                <label >Name</label>
                                <input type="text" className="form-control"
                                  value={this.state.name} onChange={(value) => this.setState({ name: value.target.value })}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-8 mb-3">
                                <label >Proficiency</label>
                                <textarea type="text" className="form-control"
                                  value={this.state.proficiency} onChange={(value) => this.setState({ proficiency: value.target.value })}
                                />
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.hideEditModal()}>
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
          </div>
        </div>
        <Modal show={this.state.showCreateModal}>
          <Modal.Header closeButton onClick={() => this.hideCreateModal()}>
            <Modal.Title>Create Experience </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label >Name</label>
                <input type="text" className="form-control" onChange={(value) => this.setState({ name: value.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label >Proficiency</label>
                <textarea type="text" className="form-control" onChange={(value) => this.setState({ proficiency: value.target.value })}
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
export default EditSkill;