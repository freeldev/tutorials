// Action objects are js literals -- action creators are
// function sthat create and return these literals

// {
//     type: "REMOVE_COLOR",
//     id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412"
// }

// {
//     type: "RATE_COLOR",
//     id: "441e0p2-9ab4-0p523-30e4-8001l8yf2412",
//     rating: 5
// }

// ACTION CREATORS ARE WHERE WE SHOULD DO ANY LOGIC FOR COMUNICATING
// WITH APIS

import C from "./constants_ACTIONTYPES";

export const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});

// now when we need to dispatch an action we can simply pass
// the action creator ro the dispatch function and the
// necessary information as arguments to the action creator

store.dispatch(removeColor("3315e1p5-3abl-0p523-30e4-8001l8yf2412"));
store.dispatch(rateColor("441e0p2-9ab4-0p523-30e4-8001l8yf2412", 5));

// this helps to abstract the details of how the action is created
// which greatly simplifies the proccess of creating an action

// for example if we create ana ction called sortBy

export const sortColors = sortedBy =>
  sortedBy === "rating"
    ? {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_RATING"
      }
    : sortedBy === "title"
      ? {
          type: C.SORT_COLORS,
          sortBy: "SORTED_BY_TITLE"
        }
      : {
          type: C.SORT_COLORS,
          sortBy: "SORTED_BY_DATE"
        };

store.dispatch(sortColors("title")); // considerably less typing when wanting to sort by title : ) happy days

// CREATING AN ACTION CREATOR FOR ADD_COLOR

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
});

// now all we have to write when adding a color is

store.dispatch(addColor("#F142FF", "Party Pink"));
