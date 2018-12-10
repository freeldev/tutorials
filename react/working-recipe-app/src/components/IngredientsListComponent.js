// Using the ingredient componeent from IngredientComponent.js
// we can construct an unordered list with the list componenet

import React, { Component } from 'react';
import Ingredient from './IngredientComponent'

const IngredientsList = ({list}) =>
  <ul className="ingredients">
    {list.map((ingredient, i) =>
      <Ingredient key={i} {...ingredient} />
    )}
  </ul>

export default IngredientsList


// using the spread operator ...ingredient is the same as doing
// <ingredent amount={ingredient.amount}
//            measurement = {ingredient.measurement}
//            name = {ingredient.name} />
