// create a stateless functional component for each
// ingredient including the amount, measurement, and name
// extracted from JSXRecipies.js Recipe component

// creates each individual list item -- will be displayed by a different
// component

import React, { Component } from 'react';
const Ingredient = ({amount, measurement, name}) =>
  <li>
      <span className="amount">{amount}></span>
      <span className="measurement">{measurement}</span>
      <span className="name">{name}</span>
  </li>

export default Ingredient
