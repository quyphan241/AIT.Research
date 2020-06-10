import React, { Component } from 'react';
import skillService from '../../service/SkillService';

class Skill extends Component {

  constructor() {
    super()
    this.state = {
      listSkill: []
    }
  }

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

  render() {
    
    return (
      <div className="section" id="skill">
        <div className="container">
          <div className="h4 text-center mb-4 title">Personal Skills</div>
          <div className="card">
            <div className="card-body">

              <div className="row">
                {
                  this.state.listSkill.map((data, i) => {
                    return (
                      <div className="col-md-6">
                        <div className="progress-container progress-primary"><span className="progress-badge">{data.name}</span>
                          <div className="progress">
                            <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                              data-aos-offset={10} data-aos-duration={2000} role="progressbar" aria-valuenow={60} 
                              aria-valuemin={0} aria-valuemax={100} style={{ width:+data.proficiency+'%' }} />
                              <span className="progress-value">{data.proficiency}%</span>
                          </div>
                        </div>
                      </div>
                    )
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
export default Skill;