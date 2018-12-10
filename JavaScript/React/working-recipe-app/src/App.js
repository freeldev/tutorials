import Recipe from './components/RecipeComponent'
import React, { Component } from 'react';
import data from './data/recipes'
import './App.css';

const App = ({ recipes }) =>
  <article>
      <header>
          <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
          { recipes.map((recipe, i) =>
              <Recipe key={i} {...recipe} />)
          }
      </div>
  </article>

export default App;
