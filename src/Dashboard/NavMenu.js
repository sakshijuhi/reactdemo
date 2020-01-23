import React, { Component } from "react";
import { withRouter,NavLink } from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import Navbar from "reactstrap/es/Navbar";


class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAdmin : false,
    };
   
  }

  toggle() {
    this.setState({
  
    });
  }

  componentDidMount() {
  
  }

  render() {
   return (
    <div className="Nav_Custom">
        <Navbar expand="md">
             <Nav className="horizontal ml-auto" navbar>

            <NavItem className="NavItem_Custom" >
                <NavLink exact to="/"
                         style={{ textDecoration: 'none' }} activeClassName="Nav_PageSwitcher__Item--Active" className="Nav_PageSwitcher__Item Nav_Link Nav_Link_Pipe">HOME</NavLink>
            </NavItem>

            <NavItem className="NavItem_Custom" >
                <NavLink to="/employeelist"
                         style={{ textDecoration: 'none' }} activeClassName="Nav_PageSwitcher__Item--Active" className="Nav_PageSwitcher__Item Nav_Link Nav_Link_Pipe">EMPLOYEE LIST</NavLink>
            </NavItem>

          
        </Nav>
        </Navbar>

    </div>);
  }
}

export default withRouter(NavMenu);
