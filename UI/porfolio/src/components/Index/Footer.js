import React, { Component } from "react";
import profileService from '../../service/ProfileService';

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phoneNumber: ""
        }
    }

    async componentDidMount() {
        console.log("Mounted Edit");
        const res = await profileService.list()
        if (res) {
            this.setState({
                email: res.email,
                phoneNumber: res.phoneNumber,
                name: res.name
            })
        }
        else {
            alert("Error ==>" + res.message)
        }
    }

    render() {
        return (
            <footer className="footer" id="contact">
                <div className="container text-center">
                    <a className="cc-facebook btn btn-link">
                        <i className="fa fa-facebook fa-2x " aria-hidden="true" />
                    </a>
                    <a className="cc-twitter btn btn-link " >
                        <i className="fa fa-twitter fa-2x " aria-hidden="true" />
                    </a>
                    <a className="cc-google-plus btn btn-link">
                        <i className="fa fa-google-plus fa-2x" aria-hidden="true" />
                    </a>
                    <a className="cc-instagram btn btn-link">
                        <i className="fa fa-instagram fa-2x " aria-hidden="true" />
                    </a>
                </div>
                <div className="h4 title text-center">{this.state.name}</div>
                <div className="text-center text-muted">
                    Phone Number: {this.state.phoneNumber}
                </div>
                <div className="text-center text-muted">
                    Email: {this.state.email}
                </div>
            </footer>
        );
    }
}
export default Footer;
