import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import storeFactory from "./store";

const store = storeFactory();

render(
  <Provider store={store}>
    {/*The provider requires the store to be passed as a propetery it adds store to context
     So all children off the App component can have access to the store*/}
    <App />
  </Provider>,
  document.getElementById("react-container")
);
