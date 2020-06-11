import React, { Component } from "react";
import profileService from "../../service/ProfileService";
import { Modal, Button, Header, Title, Footer } from "react-bootstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  showModal = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Modal show={this.state.show}>
        <Modal.Header closeButton onClick={() => this.hideModal()}>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.hideModal()}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => this.onClickUpdate()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Profile;
