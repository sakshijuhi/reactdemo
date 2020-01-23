import React, { Component } from "react";
import { Button } from "reactstrap";
import { Table, Container } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "./employeelistAction";

class employeelist extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    sessionStorage.clear();
    const { dispatch } = this.props;
    dispatch(actions.getEmployeeList());
  }

  handleClick(id){
    this.props.history.push('/employeedetails/'+id);
  }

  render() {
    console.log("employee list");

    return (
      <Container>
        <br />
        <br />
        <Table className="SignUp_App__Form shadow-lg p-5 mb-5 bg-white rounded">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {this.props.employeeListInfo.map((item, i) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                <Button color="primary" onClick={event=>this.handleClick(item.id)}>
                  Details
                </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeListInfo: state.employeelistReducer.employeeListInfo || []
  };
};

export default connect(mapStateToProps)(employeelist);
