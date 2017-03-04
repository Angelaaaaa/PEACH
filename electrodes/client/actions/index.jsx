
//Actions are payloads of infromation that send data from application to store
//only one source of information for the store.
//Action creators are exactly that—functions that create actions.
//In Redux action creators simply return an action:

/*The dispatch() function can be accessed directly from the store 
as store.dispatch(), but more likely you'll access it using a 
helper like react-redux's connect(). You can use 
bindActionsCreators() to automatically bind many action creators to 
a dispatch() function.
*/

export const toggleCheck = () => {
  return {
    type: "TOGGLE_CHECK"
    //type property indicates what type of action being performed
    //defined as string constant
    // If app big enough, move to seperate module
  };
};

export const incNumber = () => {
  return {
    type: "INC_NUMBER"
  };
};

export const decNumber = () => {
  return {
    type: "DEC_NUMBER"
  };
};
