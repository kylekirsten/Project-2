import React from 'react';
import { Container, Row, Button, Carousel, Col } from 'react-bootstrap';
import './Landing.css';
import landing1 from '../resources/images/landing1.jpg';
import landing2 from '../resources/images/landing2.jpg';
import landing3 from '../resources/images/landing3.jpg';
import landing4 from '../resources/images/landing4.jpg';
import landing5 from '../resources/images/landing5.jpg';
import iconWhite from '../resources/images/icon/icon-white-2.png';
import { IAuthState, IAppState, IAccountState } from '../reducers';
import { setRedirect } from '../actions/Authentication.action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Login from './account/Login';
import IsMobile from '../utils/IsMobile';
import { Footer } from '../components/Footer';
import { closeModal, openLogin } from '../actions/AccountModal.action';
import { AccountModalType } from '../reducers/AccountModal.reducer';
import Signup from './account/Signup';
import ForgotPassword from './account/ForgotPassword';
interface IState {
    buttonClicked : boolean,
    loginDialogOpen : boolean,
    logoKShow: boolean,
}
export interface IReduxProps {
    //data from state store
    auth: IAuthState,
    accountModal : IAccountState,
    //Action creators from the dispatcher
    openLogin : () => void;
    closeModal : () => void;
    setRedirect: (url : string) => void;
}
export class Landing extends React.Component<IReduxProps,IState>{
    constructor(props: any){
        super(props);
        this.state = {
            buttonClicked: false,
            loginDialogOpen: false,
            logoKShow: true,
        }
    }
    handleModalClose = (event: any) =>   {
        this.props.closeModal();
    }
    handleButtonClick = (event: any) => {
        this.props.setRedirect(event.target.name);
        this.props.openLogin();
    }
    componentDidMount() {
        if(!IsMobile()){
            setTimeout(() => {
                this.setState({...this.state, logoKShow: false});
            },2500);
        } else {
            this.setState({...this.state, logoKShow: false});
        }
    }
    render() {
        return(
            
            <div className = 'landing-background'>
                {this.props.accountModal.selectedModal === AccountModalType.LOGIN ? 
                <Login updateCallback = {this.handleModalClose}/> : null }
                {this.props.accountModal.selectedModal === AccountModalType.SIGNUP ? 
                <Signup updateCallback = {this.handleModalClose}/> : null }
                {this.props.accountModal.selectedModal === AccountModalType.FORGOT_PASSWORD ? 
                <ForgotPassword updateCallback = {this.handleModalClose}/> : null }
            <Carousel controls = {false} indicators = {false} className = "landing-background-carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landing1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landing2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landing3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landing4}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landing5}
                        alt="Fifth Slide"
                        />
                    </Carousel.Item>
                </Carousel>
            <Container className = "landing-container">
                
                <Row>
                    <h1><span className = 'cut-container'>
                        <img src = {iconWhite}/></span>{this.state.logoKShow ?
                    <span className = 'hide-later'>K</span> : null}
                    utsies</h1>
                    <hr className = 'hr-light'/>
                </Row>
                <Row noGutters><Col className = "border-right"><p className = 'landing-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis officia voluptatem nulla nemo temporibus accusantium inventore, labore consequuntur suscipit voluptatum 
                incidunt sed quisquam, esse dicta qui adipisci doloremque. Deserunt, vel!
                Quod quas nam quos saepe quisquam culpa tempore dolor laboriosam animi? </p>
                <Button name = "makerportal" className = "landing-button ripple" onClick = {this.handleButtonClick}>Make</Button>
                </Col>
                <Col><p className = 'landing-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis officia voluptatem nulla nemo temporibus accusantium inventore, labore consequuntur suscipit voluptatum 
                incidunt sed quisquam, esse dicta qui adipisci doloremque. Deserunt, vel!
                Quod quas nam quos saepe quisquam culpa tempore dolor laboriosam animi? </p>
                <Button name = "userportal" className = "landing-button ripple" onClick = {this.handleButtonClick}>Work</Button>
                </Col></Row>
            </Container>
            <Footer/>
            </div>
        )

    }
}
const mapStateToProps = (state : IAppState) => {
    return {
        auth: state.auth,
        accountModal: state.accountModal,
    }
}
//This object definition will be used to map action creators to properties
const mapDispatchToProps = {
    closeModal: closeModal,
    openLogin: openLogin,
    setRedirect: setRedirect,
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);