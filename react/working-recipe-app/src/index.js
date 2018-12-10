import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/recipes'

ReactDOM.render(<App recipes={data}/>, document.getElementById('root'));
  registerServiceWorker();
