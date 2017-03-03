//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {Router} from "react-router";
import "./styles/base.css";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

window.webappStart = () => {

  render(
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>,
    document.querySelector(".js-content")
  );
};

