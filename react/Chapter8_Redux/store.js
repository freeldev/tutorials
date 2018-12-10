// MIDDLEWARE IS GLUE BETWEEN TO DIFFERENT LAYERS OF SOFTWARE

// REDUX MIDDLEWARE ACTS ON THE STORE'S DISPATCH PIPELINE
// IT CONSISTS OF A SERIES OF FUNCITONS THAT ARE EXECUTED IN A ROW
// IN THE PROCESS OF DISPATCHING AN ACTION

// HTTP REQUEST --> LOGGER -- NEXT() --> AUTHORIZE (IF SUCCESS )-- NEXT() --> RESPONSE HEADERS -- NEXT() --> SEND CONTENT --- HTTP RESPONSE SUCCESS

// each piece of middleware is a function that has access to the action
// a dispatch function, and a function taht will call next().
// next causes the update to occur, before next is called you can
// modify the action. after next the state will have changed

// DISPATCH --> LOG TO CONSOLE -- next(action) --> AUTHORIZE? --> next(action) --> async actions -- dispatch -- next(action) --> reducers update state --> invoke subscribers

// Applying middleware to the store  with a storeFactory.
// in this case the factory will create a store that has
// middleware for logging and saving data.  The storeFactory will
// be one file that contains one function that grupos everything
// needed to create the store -- whenever we need a store we can invoke this function

const store = storeFactory(initialData);

// when we create the store, we creat two pieces of middleware: the logger and the saver
// the data is saved to localStorage with middleware instead of the store method

import { createStore, combineReducers, applyMiddleware } from "redux";
import { colors, sort } from "./reducers";
import stateData from "./initialState";

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors, sort }),
    localStorage["redux-store"]
      ? JSON.parse(localStorage["redux-store"])
      : stateData
  );

export default storeFactory;
