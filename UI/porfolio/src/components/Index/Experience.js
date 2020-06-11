import React, { Component } from 'react';
import experienceService from '../../service/ExperienceService';
import EditExperience from '../edit/EditExperience';


class Experience extends Component {

  constructor() {
    super()
    this.state = {
      listExperience: [],
      showEditModal: false
    }
  }

  showModal = () => {
    this.setState({ showEditModal: true });
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

  render() {
    return (
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          {
            this.state.listExperience.map((data) => {
              return (
                <div className="card">
                     <button className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"
          onClick={() => this.showModal()}>Edit</button> 
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
                  <EditExperience show={false} />
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