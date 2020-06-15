import React, { Component } from 'react';
import educationService from '../../service/EducationService'

class Education extends Component {

    constructor() {
        super()
        this.state = {
            listEducation: []
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
     
    render() {
        return (
            <div className="section">
                <div className="container cc-education">
                    <div className="h4 text-center mb-4 title">Education</div>
                    {
                        this.state.listEducation.map((data) => {
                            return (
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset={50} data-aos-duration={500}>
                                            <div className="card-body cc-education-header">
                                                <p>{data.period}</p>
                                                <div className="h5">{data.degree}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                                            <div className="card-body">
                                                <div className="h5">{data.major}</div>
                                                <p className="category">{data.school}</p>
                                                <p style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}
export default Education;