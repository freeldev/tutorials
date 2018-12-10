import React from 'react';
import { render } from 'react-dom';
import App from "./components/App";
import { Provier } from 'react-redux';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)