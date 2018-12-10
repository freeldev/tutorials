// actions provide the instructions and data that the store will use to
// modify the state -- action creators are functions that can be used
// to abstract away the nitty-grtty etails required to build an action

// actions themselve are objects that at a min contain a type filed
// the action type is typically an uppercase string that describes an action
// additionally actions may package any data required by the store

const countdownActions = dispatcher => ({
  tick(currentCount) {
    dispatcher.handleAction({ type: "TICK" });
  },
  reset(count) {
    dispatcher.handleAction({
      type: "RESET",
      count
    });
  }
});

// when countdown action creators are loaded, the dispatcher is
// sent as an argument.  Every time  aTICK or a RESET Is invoked
// the dispatcher's handleAction method is invoked which "dispatches" the
// action object

export default countdownActions;
