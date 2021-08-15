import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../base";
import { AuthContext } from "../auth/auth";
import './login.css'
import Navbar from '../navbar/navbar'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
return (
    <div>
        <Navbar />
      <form onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email"  className="loginInput" />
          <input name="password" type="password" placeholder="Password" className="loginInput" />
        <button type="submit"  className="loginBtn">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);