import React, { Component, unstable_Profiler } from 'react';
import { IAppState, IAuthState } from '../reducers';
import {
    loginSuccessful, toggleAuthStatus,
    authTimerTick,
    logout
} from '../actions/Authentication.action';
import { connect } from 'react-redux';
import { Form, Button, Card, Col, Navbar, Nav, Dropdown, Row } from 'react-bootstrap';
import './userAccount.css';
import Profile from '../resources/images/profile.jpg';
import { ListGroup } from 'react-bootstrap';
import './Header.css';
import iconWhite from '../resources/images/icon/icon-white-2.png';
import { Link } from 'react-router-dom';

interface IState {
}

export interface IAuthProps {
    //data from state store
    auth: IAuthState,
    logout: () => void,
    //Action creators from the dispatcher

}
class Header extends Component < IAuthProps, any >  {
    constructor(props: any) {
        super(props);
        this.state = {
            userFullName: <Dropdown.Item>{this.props.auth.userProfile.getFullName()}</Dropdown.Item>,
            rating: <Dropdown.Item>{this.props.auth.userProfile.getRating()}</Dropdown.Item>
        }
    }
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        this.props.logout();
    }
    render () {
        return(
        <header className='main-header'>
            <Row className='header-nav'>
                <Col sm={12} md={3} lg={3} xl={3}>
                    <Navbar.Brand className="Logo" href="#/">
                        <img  className="sissorImage" src={iconWhite} />
                    </Navbar.Brand>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                    <Navbar className='nav-black'>
                        <Nav className="">
                            <Link to="/">Home</Link>
                            <Link to="/userportal">Work</Link>
                            <Link to="/makerportal">Hire</Link>
                        </Nav>
                    </Navbar>
                </Col>
                    <Col sm={12} md={3} lg={3} xl={3}>
                        <Dropdown className = "header-dropdown">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                Account
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {this.state.userFullName}
                                { this.props.auth.userProfile.getRating() != 0.0 &&
                                    <a href = "#">Rating{parseFloat(''+this.props.auth.userProfile.getRating()).toFixed(2)}</a>
                                }
                                <a href = "#" onClick = {(e) => {e.preventDefault(); this.logoutUser()}}>
                                    Logout</a>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
            </Row>
        </header>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = {
    loginSuccessful: loginSuccessful,
    toggleAuthStatus: toggleAuthStatus,
    authTimerTick: authTimerTick,
    logout: logout,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);