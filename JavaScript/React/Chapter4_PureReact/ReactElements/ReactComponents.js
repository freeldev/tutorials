// A user interface is made up of parts -- in React we describe each of these
// parts using componenets -- IT IS BEST TO BREAK DOWN PARTS TO REUSABLE PIECES

// we can achieve this with three differnt constructs
//    createClass, ES6 classes, stateless functional componenets


// React.createClass is an oler way to createClasses possibl
// STATELESS FUNCTIONAL COMPONENETS ARE BEST PRACTICE -- USE WHENEVER POSSIBLE
// SCROLL TO BOTTOM TO SEE
//
const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement('ul', {'className': 'ingredients'},
      React.createElement('li', null, '1 lb of Salmon'),
      React.createElement('li', null, '1 cup of Pine Nuts'),
      React.createElement('li', null, '2 cups of butter lettue'),
      React.createElement('li', null, '1 Yellow Squash'),
      React.createElement('li', null, '1/2 cup of Olive Oil'),
      React.createElement('li', null, '3 cloves of garlic')
    )
  }
})

const list = React.createElement(IngredientsList, null, null)

ReactDOM.render(
  list,
  document.getElementById('react-container')
)

// In render we can use the this keyword to refer to the component instance
// and properties can be accesed on that instance with this.props

// The above code creates the element below

<IngredientsList>
  <ul className='ingredients'>
    <li>1 lb Salmon</li>
    <li>1 cup Pine Nuts</li>
    <li>2 cups butter lettuce</li>
    <li>1/2 cup olive oil</li>
    <li>1 yellow squash</li>
    <li>3 cloves garlic</li>
  </ul>
</IngredientsList>

// Data can be passed to React componenets as properties.  We can create a
// reusable lsit of ingreients by passing that data to the list as an array

const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  render() {
    return React.createElement('ul', {className: 'ingredients'},
      this.props.items.map((ingredient, i)) =>
        React.createElement('li', {key: i}, ingredient)
      )
  }
})

const items = [
  '1 lb of salmon',
  '1 cup pine nuts',
  '2 cups buter lettuce',
  '1 yellow squash',
  '1/2 cup olive oil',
  '3 cloves garlic'
]

ReactDOM.render(
  React.createElement(IngredientsList, {items}, null),
  document.getElementById('react-identifier')
)

// The code above 50-72 creates the component below

<IngredientsList items=[...]>  // the property items is an array with six ingredients
  <ul className='ingredients'>
    <li>1 lb salmon</li>
    <li>1 cup pine nuts</li>
    <li>2 cups butter lettuce</li>
    <li>1 yellow squash</li>
    <li>1/2 cup olive oil</li>
    <li>3 cloves garlic</li>
  </ul>
</IngredientsList>

// Componenets are objects -- they can be used to encapsulate code like classes
// we can create a method that renders a single list item and use that to build out the list

const IngredientsList = React.createClass({
  displayName: "IngredientsList",
  renderListItem(ingredient, i){
    return React.createElement("li", {key: i}, ingredient)
  },
  render() {
    return React.createElement('ul', {className: 'ingredients'},
      this.props.items.map(this.renderListItem)
    )
  }
})

// One of the key features included into the ES6 spec is the React.Component,
// an abastract class that we can use to build new React Componenets
// we can createcustom components through inheritance by etending this class
// with es6 syntax

class IngredientList extends React.Component {
  renderListItem(ingredient, i){
    return React.createElement('li', {key: i}, ingredient)
  }

  render(){
    return React.createClass('ul', {className: 'ingredients'},
      this.props.items.map(this.renderListItem)
    )
  }

}

// STATELESS FUNCTIONAL COMPONENETS ARE BEST PRACTICE -- USE WHENEVER POSSIBLE

// Stateless function componenets are functions that take in proeprties and return
// a DOM element.  Stateless functional componenets are a good wa to practice
// the rules of functional programming.  Each functional component should be
// a pure function -- take in props, return a DOM element without any side effects.

// this component would be rendered with ReactDOM.render()
const IngredientsList = props =>
  React.createElement('ul', {className: 'ingredients'},
    props.items.map((ingredient, i) =>
      React.createElement('li', { key: i }, ingredient)
    )
)

// we can destructure the properties argument by using destructuring syntax

const IngredientsList = ({items}) =>
  React.createElement('ul', {'className': 'ingredients'},
    items.map((ingredient, i) =>
      React.createElement('li', {key: i}, ingredient)
  )
)

render() {
  IngredientsList
}
