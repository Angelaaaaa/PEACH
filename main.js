import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {toggleCheck, incNumber, decNumber} from "../actions";

class Home extends React.Component {
  render() {
    // const props = this.props;
    // const {checked, value} = props;
    return (
      <div>
        <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a></h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked}/>
            Checkbox
          </label>
          <div>
            <button type={"button"} onClick={props.onDecrease}>-</button>
            &nbsp;{value}&nbsp;
            <button type={"button"} onClick={props.onIncrease}>+</button>
          </div>
        </div>
      </div>
    );
  }
}    