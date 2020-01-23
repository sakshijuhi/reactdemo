import React, { Component } from 'react';
import './App.css';
import home from './Dashboard/home/home';
import { HashRouter as Router, Route } from 'react-router-dom';
import employeelist from './Dashboard/employeelist/employeelist';
import employeedetails from './Dashboard/employeedetails/employeedetails';
import NavMenu from "./Dashboard/NavMenu";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router >
        <NavMenu />
        <Route exact path='/' component={home} />
        <Route path='/employeelist' component={employeelist} />
        <Route path='/employeedetails/:id' component={employeedetails} />
      </Router>
    )

  }
}

export default App;
