import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { UserAccount } from '../../components/userAccount';


export default class LeftUserPortal extends Component<any, any>{

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/userportal/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/userportal/myjobs">My Jobs</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a >Current User</a>
                        </Navbar.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Current User
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/userAccount">My Account</Dropdown.Item>

                                //The account page will modify the information stored in the User Class
                                <Dropdown.Item href="#/action-2">My Jobs</Dropdown.Item>

                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>

                </Navbar>

            </React.Fragment>
        );
    }
}
