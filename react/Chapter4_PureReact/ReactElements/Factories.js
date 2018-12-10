// We can create a React element using factories -- factories are used to
// abstract away the details of insantiating objects.

// React has built-in factories for all common HTML and SVG elements,
// you can use createFactory function to build your own

// Using the <h1> factory below

// 1st argument - properties
// 2nd argument - children
React.DOM.h1(null, "Baked Salmon")

// We can also do the same to build the unordered list
React.DOM.ul({'className': 'ingredients'},
  React.DOM.li(null, '1lb salmon')
  React.DOM.li(null, '1 cup pine nuts')
  React.DOM.li(null, '2 cups lettuce butter')
  React.DOM.li(null, '1 yellow squash')
  React.DOM.li(null, '1/2 cup olive oil')
  React.DOM.li(null, '3 cloves garlic')
)

// Using factories from start to finish

var items = [
  '1 lb Salmon',
  '1 cup of Pine Nuts',
  '2 cups of Butter Lettuce',
  '1/2 cup of Olive Oil'
  '1 Yellow Squash',
  '3 Cloves of garlic'
]

var list = React.DOM.ul(
  { className: 'ingredients'},
  items.map((ingredient, key) =>
    React.DOM.li({key}, ingredient)
  )
)

ReactDOM.render(
  list,
  document.getElementById('react-container')
)

// USING FACTORIES WITH COMPONENETS

const { render } = ReactDOM;

const IngredientsList = ({list}) =>
  React.createElement('ul', null,
    list.map((ingredient, i) =>
      React.createElement('li', {key: i}, ingredient)
  )
)

const Ingredients = React.createFactory(IngredientsList)

const list = [
  '1 lb Salmon',
  '1 cup of Pine Nuts',
  '2 cups of Butter Lettuce',
  '1/2 cup of Olive Oil'
  '1 Yellow Squash',
  '3 Cloves of garlic'
]

render(
  Ingredients({list}),
  document.getElementById('react-container')
)
