import {combineReducers} from "redux";

//specify how the application's state changes in response
//The reducer is a pure function that takes the previous state and an action, and returns the next state.

/*T
hings you should never do inside a reducer:

-Mutate its arguments;
-Perform side effects like API calls and routing transitions;
-Call non-pure functions, e.g. Date.now() or Math.random().
*/
const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || {checked: false};
  //|| shows the original state
};

const number = (store, action) => {
  if (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  }

  return store || {value: 0};
};

//Combining both reducers
//with the slices of state selected according to their keys, and combining their results into a single object again
export default combineReducers({
  checkBox,
  number
});
