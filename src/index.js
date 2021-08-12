import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./components/home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Home} />
  </Switch>
  </BrowserRouter>,
  rootElement
);
