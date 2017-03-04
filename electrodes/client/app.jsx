//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {Router} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./styles/base.css";
import rootReducer from "./reducers";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//

// /The Store is the object that brings them together.
/*The store has the following responsibilities:

-Holds application state;
-Allows access to state via getState();
-Allows state to be updated via dispatch(action);
-Registers listeners via subscribe(listener);
-Handles unregistering of listeners via the function returned by subscribe(listener).
*/
window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState);
  //createStore(reducers) importing the combined reducer above;
  //You may optionally specify the initial state as the second argument to createStore(). This is useful for hydrating the state of the client to match the state of a Redux application running on the server.
  render(
    <Provider store={store}>
    //make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component:
      <Router>{routes}</Router>
    </Provider>,
    document.querySelector(".js-content")
  );
};

