import React, { Component } from 'react';
import referenceService from '../../service/ReferenceService';

class EditReference extends Component {

    constructor() {
        super()
        this.state = {
            listReference: []
        }
    }

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

    render() {
        return (
            <div className="section">
                <h4>Employee List v3</h4>
                <hr />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Position</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listReference.map((data) => {
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.company}</td>
                                        <td>{data.position}</td>
                                        <td>{data.image}</td>
                                        <td>{data.description}</td>
                                        <td>
                                            <button className="btn btn-outline-info" to={"/employee/edit/" + data.id}>Edit</button>
                                            <a href="#" class="btn btn-danger"> Delete </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>);
    }
}
export default EditReference;