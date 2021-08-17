import React from "react"
import app from "../../base"
import './navbar.css';
import { Container, Navbar } from 'react-bootstrap'
import logoImg from '../../asset/logo.png'
// import Maintanance from '../../asset/maintanance.jpg'


const NavbarHome = () => {
    return (
        <>
            <Navbar className="homeNav">
                <Container className="homeCon">
                    <img src={logoImg} width="20px" className="homeImg" alt="/"/>
                    <button onClick={() => app.auth().signOut() } className="signoutbtn">Sign Out</button>
                </Container>
            </Navbar>
            <div>
                {/* <img src={Maintanance} className="maintananceImg" alt="/"/> */}
            </div>
        </>
    );
};

export default NavbarHome
