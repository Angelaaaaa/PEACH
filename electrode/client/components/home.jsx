import React from "react";
import {connect} from "react-redux";
import {toggleCheck, incNumber, decNumber} from "../actions";


class Home extends React.Component {



  render() {

    return (
      <div>
        <h1>Login Page</h1>
        <form method = "post">
          <ul>
            <li>
              <label>
                username:
                <input type="text" name="username" />
                password:
                <input type="text" name="password" />
              </label>
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}


export default (Home);