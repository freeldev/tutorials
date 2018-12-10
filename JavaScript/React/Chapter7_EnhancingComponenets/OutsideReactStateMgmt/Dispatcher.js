import Dispatcher from "flux";

// THERE IS EVER ONLY ONE DISPATCHER (kinda like an air traffic controller)
// dispatcher takes action packages it with some information about where the
// action was generated and sends it on to the appropriate store or stores
// that will handle the action

class CountdownDispatcher extends Dispatcher {
  handleAction(action) {
    console.log("dispatching action:", action);
    this.dispatch({
      source: "VIEW_ACTION",
      action
    });
  }
}

export default Dispatcher;
