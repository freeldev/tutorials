// JSX ALLOWS TO RENDER COMPONENTS AS CHILDREN OF OTHER COMPONENTS

<IngredientsList>
  <Ingredient />
  <Ingredient />
  <Ingredient />
</IngredientsList>

// SINCE CLASS IS A RESERVED WORD IN JS
// className is used to dfine the class attribute

<h1 className='fancy'>Baked Salmon</h1>

// JS Expressions are wrapped in curly braces and
// indicate where variables shall be evaluated and their resulting
// values returned

// if we wanted to return the value of the title proerpty in an element
<h1>{this.props.title}</h1>

// Values of types other than string should also appear as JS Expressions
<input type='checkbox' defaultChecked={false} />

// All JS added between is evaulted - functions are called // concatenation occurs
<h1>{"Hello" + this.props.title}</h1>
 <h1>{this.props.title.toLowerCase().replace}</h1>

 function appendTitle({this.props.title}) {
   console.log(`${this.props.title} is great!`)
 }

 // Mapping arrays to JSX
 <ul>
   {this.props.ingredients.map((ingredient, i) =>
   <li key={i}>{ingredient}</li>
 )}
 </ul>
