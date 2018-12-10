import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import storeFactory from "./store";

const store = storeFactory();

const render = () =>
  ReactDOM.render(
    <App store={store} />,
    document.getElementById("react-container")
  );

store.subscribe(render); // everytime the store changes the render function is invoked
render();
