import React, { useContext } from "react"
import app from "../../base"
import './navbar.css';
import { Container, Navbar } from 'react-bootstrap';
import logoImg from '../../asset/logo.png';
import  { Dropdown } from 'react-bootstrap';
import { AuthContext } from "../auth/auth";
// import Maintanance from '../../asset/maintanance.jpg'


const NavbarHome = () => {
    const { currentUser } = useContext(AuthContext);
    const currentUserEmail = currentUser ? currentUser.email : "";
    return (
        <>
            <Navbar className="homeNav">
                <Container className="homeCon">
                    <img src={logoImg} width="20px" className="homeImg" alt="/" />
                        <Dropdown className="profileDrop">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <svg width="15.75" height="18" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9375 12.5C14.3896 12.5 17.1875 9.70215 17.1875 6.25C17.1875 2.79785 14.3896 0 10.9375 0C7.48535 0 4.6875 2.79785 4.6875 6.25C4.6875 9.70215 7.48535 12.5 10.9375 12.5ZM15.3125 14.0625H14.4971C13.4131 14.5605 12.207 14.8438 10.9375 14.8438C9.66797 14.8438 8.4668 14.5605 7.37793 14.0625H6.5625C2.93945 14.0625 0 17.002 0 20.625V22.6562C0 23.9502 1.0498 25 2.34375 25H19.5312C20.8252 25 21.875 23.9502 21.875 22.6562V20.625C21.875 17.002 18.9355 14.0625 15.3125 14.0625Z" fill="#FF416C"/>
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropMenu">
                            <Dropdown.Item><span>{`${currentUserEmail}`}</span></Dropdown.Item>
                            <button onClick={() => app.auth().signOut() } className="signoutbtn">Sign Out</button>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
            <div>
                {/* <img src={Maintanance} className="maintananceImg" alt="/"/> */}
            </div>
        </>
    );
};

export default NavbarHome
