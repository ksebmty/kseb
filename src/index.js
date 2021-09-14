import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home';
import Login from "./components/login/login";
import Signup from './components/signup/signup';
import Edit from './components/create/edit';
import Show from './components/create/list';
import Delete from './components/create/delete';
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
    <Route path='/edit/:id' component={Edit} />
    <Route path='/show/:id' component={Show} />
    <Route path='/delete/:id' component={Delete} />
    </AuthProvider>
  </Switch>

  </BrowserRouter>,
  rootElement
);

