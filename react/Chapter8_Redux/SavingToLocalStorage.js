// using the store's subscribe function, we will listen for state
// changes and save tose changes to localStorage under the key
// 'redux-store' -- when we create the store we can check to seeif
// any data has been saved under this key and, if so, load that data
// as our initial state

const store = createStore(
  combineReducers({ colors, sort }),
  localStorage["redux-store"] ? JSON.parse(localStorage["local-store"]) : {}
);

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

console.log("current color count", store.getState.colors.length);
console.log("current state", store.getState());

store.dispatch({
  type: "ADD_COLOR",
  id: uuid.v4(),
  title: "Party Pink",
  color: "$F142FF",
  timestamp: new Date().toString()
});
