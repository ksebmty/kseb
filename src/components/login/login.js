import React, { Component } from 'react';
import './login.css'
import Navbar from '../navbar/navbar'

class login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <form action="/action_page.php" method="post">
                    <div class="container">
                        <input type="text" className="loginInput" placeholder="Employee Code" name="uname" required />
                        <input type="password" className="loginInput" placeholder="Password" name="psw" required />
                        <button type="submit" className="loginBtn">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default login;