// modularity within redux is achieved through functions (reducers)
// to update the state tree

// reducers take current state and action as arguments
// and used to return a new state --

// reducers are designed to update specific parts of a program
// we can compose reducers into one reducer to handle updating the
// entire state of our app

// each reducer is designed only to handle its part of the state tree

import C from "./constants_ACTIONTYPES";

// const action = {  // pass this as action to the color reducer function to create a new color
//     type: "ADD_COLOR",
//     id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
//     color: "#0000FF",
//     title: "Big Blue",
//     timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
// }

// const existingColor = {
//     id: "128e1p5-3abl-0e52-33p0-8401l8yf3036",
//     title: "Big Blue",
//     color: "#0000FF",
//     timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
//     rating: 0
// }

// const action =  {
//    type: "RATE_COLOR",
//    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",       // id is used to locate color in separate reducer function
//    rating: 4
// }

// console.log( color(existingColor, action) )

export const color = (state = {}, action) => {
  // color expects an object and returns an object
  switch (action.type) { // will only handle actions that affect color "ADD_COLOR" "RATE_COLOR"
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0
      };
    case C.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating
          };
    default:
      return state;
  }
};

export const colors = (state = [], action) => {
  // colors expects an array and returns an array
  switch (action.type) { // ADD_COLOR, REMOVE_COLOR, RATE_COLOR,
    case C.ADD_COLOR:
      return [...state, color({}, action)];

    case C.RATE_COLOR:
      return state.map(c => color(c, action));
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

// const state = "SORTED_BY_DATE"

// const action = {
//     type: C.SORT_COLORS,
//     sortBy: "SORTED_BY_TITLE"
// }

export const sort = (state = "SORTED_BY_DATE", action) => {
  // sort expects a string and returns a string
  switch (action.type) { // SORT_COLOR
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};

// then we will combine reducers into one single reducer function
// colors will be combined with color because they are linked in the state tree
// sort colors wll then be combined with colors to the main reducer function
