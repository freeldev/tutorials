// stores are objects that hold the application's logic and state data
// stores are not restricted to managing data in a single boject

// current state data can be obtained from a store via props
// everything a store needs to change state data is provided
// in the action -- a store will handle actions by type
// and change their data accordingly

// once data is changed the store will emit an event and notify any views
// that have subscribed to the store that their data has changed . . .

import { EventEmitter } from "events";

class CountdownStore extends EventEmitter {
  constructor(count = 5, dispatcher) {
    super();
    this._count = count;
    this.dispatcherIndex = dispatcher.register(this.dispatch.bind(this));
  }
  get count() {
    return this._count;
  }

  dispatch(payload) {
    const { type, count } = payload.action;
    switch (type) {
      case "TICK":
        this._count = this._count - 1;
        this.emit("TICK", this._count);
        return true;

      case "RESET":
        this._count = count;
        this.emit("RESET", this._count);
        return true;
    }
  }
}

export default CountdownStore;
