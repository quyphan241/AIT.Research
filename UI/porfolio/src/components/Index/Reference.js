import React, { Component } from 'react';
import referenceService from '../../service/ReferenceService';

class Reference extends Component {

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
            <div className="section" id="reference">
                <div className="container cc-reference">
                    <div className="h4 mb-4 text-center title">References</div>
                    <div className="card" data-aos="zoom-in">
                        <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {
                                    this.state.listReference.map((data,i) => {
                                        if (i === 0) {
                                            return (
                                                <li className="active" data-target="#cc-Indicators" data-slide-to={i} />

                                            )
                                        } 
                                        else {
                                            return (
                                                <li  data-target="#cc-Indicators" data-slide-to={i} />
                                            )
                                        }    
                                    })
                                }

                            </ol>
                            <div className="carousel-inner">
                                {
                                    this.state.listReference.map((data, i) => {
                                        if (i === 0) {
                                            return (
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Reference" />
                                                            <div className="h5 pt-2">{data.name}</div>
                                                            <p className="category">{data.position}</p>
                                                        </div>
                                                        <div className="col-lg-10 col-md-9">
                                                            <p> {data.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Reference" />
                                                            <div className="h5 pt-2">{data.name}</div>
                                                            <p className="category">{data.position}</p>
                                                        </div>
                                                        <div className="col-lg-10 col-md-9">
                                                            <p> {data.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Reference;