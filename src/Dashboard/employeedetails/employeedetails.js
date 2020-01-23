import { Table } from "reactstrap";
import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
import * as actions from "./employeedetailsAction";
import { connect } from "react-redux";

class employeedetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    sessionStorage.clear();
    const { dispatch } = this.props;
    dispatch(actions.getEmployeeDetails(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <br />
        <br />
        <h2 className="FormField__Header">Details</h2>
        <Form className="SignUp_App__Form shadow-lg p-5 mb-5 bg-white rounded">
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label" for="exampleName">
                    Name :
                  </Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label" for="exampleName">
                    {this.props.employeeDetailsInfo.name}
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label" for="exampleName">
                    Email :
                  </Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label">
                    {this.props.employeeDetailsInfo.email}
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label">Company:</Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label">
                    {this.props.employeeDetailsInfo.company
                      ? this.props.employeeDetailsInfo.company.name
                      : ""}
                  </Label>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label">Phone:</Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label">
                    {this.props.employeeDetailsInfo.phone}
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label">Address:</Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label">
                    {this.props.employeeDetailsInfo.address
                      ? this.props.employeeDetailsInfo.address.street +
                        " " +
                        this.props.employeeDetailsInfo.address.suite +
                        " " +
                        this.props.employeeDetailsInfo.address.city +
                        " " +
                        this.props.employeeDetailsInfo.address.zipcode
                      : ""}
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <Label className="FormField__Label">Website:</Label>
                </Col>
                <Col lg={10}>
                  <Label className="FormField__Label">
                    {this.props.employeeDetailsInfo.website}
                  </Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeDetailsInfo: state.employeedetailsReducer.employeeDetailsInfo || {}
  };
};

export default connect(mapStateToProps)(employeedetails);
