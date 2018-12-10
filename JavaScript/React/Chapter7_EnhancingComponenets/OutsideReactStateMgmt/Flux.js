import { Component } from "react";
import { render } from "react-dom";

// allows for functional stateless components --> Flux will provide the data to these components

// stateless component that returns a simple UI element
const Countdown = ({ count }) => <h1>{count}</h1>;

// in flux state is managed outisde react in something called stores
// stores are the only thing that can update a view in flux

// 1.) flux has a store
// 2.) when a button is clicked (or any action is made by user) an action
//     is dispatched to the central control compoennt called the dispatcher
// 3.) when store receives an action -- it then uses instructions to update
//     data and the UI

// DATA FLOW IN FLUX

// ACTION --> DISPATCHER --> STORE --> VIEW --> ACTION --> DISPATCHER . . .

// actions and state data are immutable in flux --> actions can come from
// a view or from other sources such as a web server

// every change requires an action -- everything action provides the instruction mae the change
// actions also serve as receipts to ell us what has changed -- what dat was used / and where the action originated
// the only thing that can make a change is the store
