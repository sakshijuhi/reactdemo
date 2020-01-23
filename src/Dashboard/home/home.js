import React, { Component } from 'react';
import logo from '../../../src/image/employee.png';
import { Container } from 'reactstrap';

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  };

  render() {
    return (
      <div>

        <Container>
          <br />
          <br />
          <div className="FormField__Header">
            <img style={{ 'border-radius': "10px" }} src={logo} className="d-inline-block Logo1" alt="" />
          </div>
        </Container>
      </div>

    );
  }
}

export default home;


