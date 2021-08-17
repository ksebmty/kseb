import React, { Component } from 'react';
import logoImg from '../../asset/logo.png'
import './head.css'

class navbar extends Component {
    render() {
        return (
            <div className="navBar">
                <img src={logoImg} width="25%" alt=""/>
                <p>Welcome Back</p>
                <p className="span">Sign to continue</p>
            </div>
        );
    }
}

export default navbar;