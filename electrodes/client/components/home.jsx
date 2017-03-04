import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {toggleCheck, incNumber, decNumber} from "../actions";

export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'https://raw.github.com/hapijs/hapi/master/images/hapi.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];

class Home extends React.Component {
  renderImage(imageUrl, key) {
    return (
        <img key={key} src={imageUrl} width="10%" height="10%"/>
    );
  }

  render() {
    // const props = this.props;
    // const {checked, value} = props;
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

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

//mapStateToProps needs to be defined before using connect()
//it tells you how to transform the current redux store state into react
//-component props
//Reading the state
const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
    //because checked requires this function to tell whether checked is true or false
    //also value needs to know its originl value
  };
};


//mapDispatchToProps receive  dispatch and return callback props for react

const mapDispatchToProps = (dispatch) => {
  return {

    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    //for example a function wants to inject props of onIncrease
    //we want onIncrease to dispatch the incNumber action

    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};
//finally we create connect on this two functions called home
export default connect(mapStateToProps, mapDispatchToProps)(Home);