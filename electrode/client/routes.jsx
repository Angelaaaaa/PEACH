import React from "react";
import {Route} from "react-router";
import Home from "./components/home";
import Receiver from "./components/receiver";

export const routes = (
  <Route path="/receive" component={Receiver}/>
  <Route path="/home" component={Home}/>
);
