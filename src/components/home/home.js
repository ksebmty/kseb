import React from "react"
import app from "../../base"
import './home.css';
import { Container, Navbar } from 'react-bootstrap'
import logoImg from '../../asset/logo.png'


const Home = () => {
    return (
        <>
            <Navbar className="homeNav">
                <Container className="homeCon">
                    <img src={logoImg} width="20px" className="homeImg" alt="/"/>
                    <button onClick={() => app.auth().signOut() } className="signoutbtn">Sign Out</button>
                </Container>
            </Navbar>
        </>
    );
};

export default Home
