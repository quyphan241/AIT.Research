import React, { Component } from 'react';
import referenceService from '../../service/ReferenceService';
import { Modal, Button } from "react-bootstrap";


class EditRefer extends Component {

    constructor() {
        super()
        this.state = {
            listReference: [],
            showEditModal: false,
            showCreateModal: false,
            name: "",
            company: "",
            position: "",
            description: "",
            image: "",
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
        const res = await referenceService.get(id);
        this.setState({
            id: res.id,
            name: res.name,
            company: res.company,
            position: res.position,
            description: res.description,
            image: res.image
        });
    };

    hideEditModal = () => {
        this.setState({ showEditModal: false });
    };


    async componentDidMount() {
        console.log("Mounted list");
        const res = await referenceService.list()
        console.log(res);
        if (res) {
            this.setState({ listReference: res })
        }
        else {
            alert("Error ==>" + res.message)
        }
    }

    async onClickUpdate() {
        console.log("Execute update");
        const res = await referenceService.update(this.state, this.state.id)
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
        const res = await referenceService.create(this.state);
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
            const res = await referenceService.delete(id)
            alert("Deleted")
            const list = this.state.listReference
            list.splice(i, 1)
            this.setState({ listReference: list })
        }
    }

    render() {
        return (
            <div className="section" id="reference">
                <div className="container cc-reference">
                    <button className="btn btn-success float-right" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.showCreateModal()}>Create </button>
                    <div className="h4 mb-4 text-center title">References</div>
                    {
                        this.state.listReference.map((data, i) => {
                            return (
                                <div className="card" data-aos="zoom-in">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 cc-reference-header"><img src={data.image} alt="Reference" />
                                                <div className="h5 pt-2">{data.name}</div>
                                            </div>
                                            <div className="col-lg-7 col-md-7">
                                                <div className="h5 pt-2">{data.name}</div>
                                                <p className="category">{data.company}<br></br>{data.position}</p>
                                                <p> {data.description}</p>
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
                                    </div>
                                    <Modal show={this.state.showEditModal}>
                                        <Modal.Header closeButton onClick={() => this.hideEditModal()}>
                                            <Modal.Title>Edit Reference </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Name</label>
                                                    <input type="text" className="form-control" required
                                                        value={this.state.name} onChange={(value) => this.setState({ name: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Company</label>
                                                    <input type="text" className="form-control" required
                                                        value={this.state.company} onChange={(value) => this.setState({ company: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Position</label>
                                                    <input type="text" className="form-control" required
                                                        value={this.state.position} onChange={(value) => this.setState({ position: value.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label>Image</label> 
                                                    <input type="text" className="form-control" required
                                                        value={this.state.image} onChange={(value) => this.setState({ image: value.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-8 mb-3">
                                                    <label >Description</label>
                                                    <textarea type="text" className="form-control" required
                                                        value={this.state.description} onChange={(value) => this.setState({ description: value.target.value })}
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
                <Modal show={this.state.showCreateModal} size="md">
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
                                <label >Image</label>
                                <input type="text" className="form-control" onChange={(value) => this.setState({ image: value.target.value })}
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
export default EditRefer;