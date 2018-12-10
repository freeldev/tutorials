// stores allow you to suscribe handler functions that are invoked
// every time the store compleets dispatching an action
// in the folllowing example, we will log the count of colors in the state

store.subscribe(() =>
  console.log("color count:", store.getState().colors.length)
);

store.dispatch({
  type: "ADD_COLOR",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  title: "Party Pink",
  color: "#F142FF",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});

store.dispatch({
  type: "ADD_COLOR",
  id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
  title: "Big Blue",
  color: "#0000FF",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});

store.dispatch({
  type: "RATE_COLOR",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  rating: 5
});

store.dispatch({
  type: "REMOVE_COLOR",
  id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412"
});

//console output
// color count: 1
// color count: 2
// color count: 2
// color count: 1

// the store's subscribe mthod returns a funciton
// that you can later use to unsubscribe the listener:

const logState = () => console.log("next state", store.getState());
const unsubscribeLogger = store.subscribe(logState);

// Invoke when ready to unsubscribe the listener
unsubscribeLogger();
