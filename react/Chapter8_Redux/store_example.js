import { store, combineReducers } from "redux";
import { colors, sort } from "./reducers";

const initialState = {
  colors: [
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
      title: "Crazy Green",
      color: "#00FF00",
      rating: 0,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
  ],
  sort: "SORTED_BY_TITLE"
};

const store = createStore(combineReducers({ colors, sort }), initialState);

console.log(store.getState().colors.length); // 3
console.log(store.getState().sort); // "STORED_BY_TITLE"

// the only way to change the state of your application is by dispatching actions through the store

console.log(
  "length of store before dispatching ADD_COLOR action",
  store.getState().colors.length
);

store.dispatch({
  type: "ADD_COLOR",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  title: "Party Pink",
  color: "#F142FF",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});

console.log(
  "Length of colors array after ADD_COLOR",
  store.getState().colors.length
);

// Length of colors array after ADD_COLOR 4

console.log(
  "Color rating before RATE_COLOR",
  store.getState().colors[3].rating
);

// Color rating before RATE_COLOR 0

store.dispatch({
  type: "RATE_COLOR",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  rating: 5
});

consoleo.log(
  "Color rating after RATE_COLOR",
  store.getState().colors[3].rating
);
