import React, { Component } from 'react';
import educationService from '../../service/EducationService'
import { Modal, Button } from "react-bootstrap";

class EditEducation extends Component {

    constructor() {
        super()
        this.state = {
            listEducation: [],
            showEditModal: false,
            showCreateModal: false,
            period: "",
            school: "",
            major: "",
            description: "",
            degree: ""
        }

    }

    async componentDidMount() {
        console.log("Mounted list");
        const res = await educationService.list()
        console.log(res);
        if (res) {
            this.setState({ listEducation: res })
        }
        else {
            alert("Error ==>" + res.message)
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
        const res = await educationService.get(id);
        this.setState({
            id: res.id,
            period: res.period,
            shool: res.school,
            major: res.major,
            degree: res.degree,
            description: res.description,
        });
    };

    hideEditModal = () => {
        this.setState({ showEditModal: false });
    };

    async onClickUpdate() {
        console.log("Execute update");
        const res = await educationService.update(this.state, this.state.id)
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
        const res = await educationService.create(this.state);
        if (res) {
            window.location.replace("/edit");
        }
        else {
            alert("Error => " + res.message)
        }
    }

    async onClickDelete(i, id) {
        var yes = window.confirm("Are you sure to delete this item?");
        if (yes === true) {
            const res = await educationService.delete(id)
            if (res) {
                alert("Deleted")
                const list = this.state.listEducation
                list.splice(i, 1)
                this.setState({ listEducation: list })
                window.location.replace("/edit");
            }
            else {
                console.log(res); alert(JSON.stringify(res))
            }
        }
    }

    render() {
        return (
            <div className="section">
                <div className="container cc-education">
                    <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.showCreateModal()}>Create </button>
                    <div className="h4 text-center mb-4 title">Education</div>

                    {
                        this.state.listEducation.map((data, i) => {
                            return (
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-3 bg-primary" data-aos="fade-right"
                                            data-aos-offset={50} data-aos-duration={500}>
                                            <div className="card-body cc-education-header">
                                                <p>{data.period}</p>
                                                <div className="h5">{data.degree}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-7" data-aos="fade-left"
                                            data-aos-offset={50} data-aos-duration={500}>
                                            <div className="card-body">
                                                <div className="h5">{data.major}</div>
                                                <p className="category">{data.school}</p>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                            <div className="card-body">
                                                <button className="btn btn-primary float-right float-top" data-toggle="modal" data-target="#exampleModal"
                                                    onClick={() => this.showEditModal(data.id)}>Edit </button>
                                                <button onClick={() => this.onClickDelete(i, data.id)}
                                                    class="btn btn-danger float-right"> Delete </button  >
                                            </div>
                                        </div>
                                    </div>
                                    <Modal show={this.state.showEditModal}>
                                        <Modal.Header closeButton onClick={() => this.hideEditModal()}>
                                            <Modal.Title>Edit Experience {data.id} </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >School</label>
                                                    <input type="text" className="form-control"
                                                        value={this.state.school}
                                                        onChange={(value) => this.setState({ school: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label>Period</label>
                                                    <input type="text" className="form-control"
                                                        value={this.state.period}
                                                        onChange={(value) => this.setState({ period: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Degree</label>
                                                    <input type="text" className="form-control"
                                                        value={this.state.degree}
                                                        onChange={(value) => this.setState({ degree: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Major</label>
                                                    <input type="text" className="form-control"
                                                        value={this.state.major}
                                                        onChange={(value) => this.setState({ major: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Description</label>
                                                    <textarea type="text" className="form-control"
                                                        value={this.state.description}
                                                        onChange={(value) => this.setState({ description: value.target.value })}
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
<Modal show={this.state.showCreateModal}>
                    <Modal.Header closeButton onClick={() => this.hideCreateModal()}>
                        <Modal.Title>Create Education </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label >School</label>
                                <input type="text" className="form-control"
                                    onChange={(value) => this.setState({ school: value.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label>Major</label>
                                <input type="text" className="form-control"
                                    onChange={(value) => this.setState({ major: value.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label >Position</label>
                                <input type="text" className="form-control"
                                    onChange={(value) => this.setState({ position: value.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label >Period</label>
                                <input type="text" className="form-control"
                                    onChange={(value) => this.setState({ period: value.target.value })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <label >Description</label>
                                <textarea type="text" className="form-control"
                                    onChange={(value) => this.setState({ description: value.target.value })}
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
            </div>
        );
    }
}
export default EditEducation;