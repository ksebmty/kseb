import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home';
import Login from "./components/login/login";
import Signup from './components/signup/signup'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './components/auth/auth';
import PrivateRoute from './components/auth/privateRoute';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
   <AuthProvider>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    </AuthProvider>
  </Switch>

  </BrowserRouter>,
  rootElement
);

