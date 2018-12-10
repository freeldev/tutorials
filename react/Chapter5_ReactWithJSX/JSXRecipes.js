// A DOWNSIDE TO JSX IS THAT IT IS NOT ABLE TO BE INTERPRTED BY THE BROWSER

var data = [
  {
    "name": "Baked Salmon",
    "ingredients": [
      { "name": "Salmon", "amount": 1, "measurement": "l lb" },
      { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
      { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
      { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
      { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ],
    "steps": [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  },
  {
    "name": "Fish Tacos",
    "ingredients": [
      { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
      { "name": "Cheese", "amount": 1, "measurement": "cup" },
      { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Tomatoes", "amount": 2, "measurement": "large"},
      { "name": "Tortillas", "amount": 3, "measurement": "med" }
    ],
    "steps": [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];

// A stateless functional componenet for an individual recipe
const Recipe = ({ name, ingredients, steps}) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <ul className='ingredients'>
      {ingredients.map((ingredient, i) =>
        <li key={i}>{ingredient.name}</li>
      )}
    </ul>

    <section className='instructions'>
      <h2>Cooking Instructions</h2>
      {steps.map((step, i) =>
        <p key={i}>{step}</p>
      )}
    </section>

  </section>
)

// A stateless functional component for the Menu of Recipes
// expressed using JSX

/*
const Menu = (props) =>
  <article>
    <header>
      <h1>{props.title}</h1>
    </header>

    <div className='recipes'>     WITHIn diN.recipes we create a component for each recipe
      {props.recipes.map((recipe, i) =>  THE CURLY BRACES PAIR STARTINB BEFORE 'props' ARE USED TO RETURN AN ARRAY OF CHILDREN
        <Recipe key={i} name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps} />
      )}
    </div>
*/

//BETTER SYNTAX THAN ABOVE
const Menu = ({title, recipes}) => (
  <article
    <header>
      <h1>{title}</h1
    </header>
   <div className='recipes'>
     {recipes.map((recipe, i) =>
       <Recipe key={i} {...recipe /> {/* ... ADDS EACH FIELD FROM THE RECIPE OBJECT  AS A PROPERTY OF THE RECIPE COMPONENET*/}
     )}
   </div>
  </article>
)

// A call to ReactDOM.render to render our menu into the current DOM
ReactDOM.render(
  <Menu recipes={data} title="Delicious Recipes" />
  document.getElementById('react-container')
)
