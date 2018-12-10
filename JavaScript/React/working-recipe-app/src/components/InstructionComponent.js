// pulled from oroginal JSXRecipes.js Recipe component
import React, { Component } from 'react';

const Instructions = ({ title, steps }) =>
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((s, i) =>
      <p key={i}>{s}</p>
    )}
  </section>

export default Instructions
