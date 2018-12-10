// React renders child elements using props.children
// in ReactDOM.js we rendered a text element as the child of h1
// therefore props.children was set to "Baked Salmon"

// we can render other React elements as children as well
// this where a componenet tree begins

// ... consider the following
// the unordered list is the root element and has six children elements
<ul>
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cupts Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 Cloves of Garlic</li>
</ul>

// THE REACT EQUIVALENT TO THE UL ROOT ELEMENT CONTAING 6 CHILDREN ABOVE
// ALL REACT ELEMENTES WITHIN THE BASE REACT ELEMENT is pushed to an array
// AND props.children are set to that array
React.createElement(
  'ul',
  null,
  React.createElement('li', null, '1lb of Salmon'),
  React.createElement('li', null, '1 cup of Pine Nuts')
  React.createElement('li', null, '2 cups Butter Lettuce')
  React.createElement('li', null, '1 Yellow Squash'),
  React.createElement('li', null, '1/2 cup Olive Oil'),
  React.createElement('li', null, '3 Cloves of Garlic')
)

// THE RESULTING REACT ELEMENT FROM THE CODE ABOVE (JS LITERAL)

{
  'type': 'ul',
  'props': {
    'children': [
      {'type': 'li', 'props': {'children' : '1 lb of Salmon'} ... },
      {'type': 'li', 'props': {'children': '1 cup of Pine Nuts'} ... },
      {'type': 'li', 'props': {'children': '2 cups of Butter Lettuce'} ... },
      {'type': 'li', 'props': {'children': '1 Yellow Squash'} ... },
      {'type': 'li', 'props': {'children': '1/2 cup Olive Oil'} ... },
      {'type': 'li', 'props': {'children': '3 cloves of Garlic'}}
    ]
  }
}
//To create the HTML element in VirtualDOM.html we would do the following

React.createElement('section', {id='Baked Salmon'},
  React.createElement('h1', null, 'Baked Salmon'),
  React.createElement('ul', {'className': 'ingredients'},
    React.createElement('li', null, "1 lb Salmon"),
    React.createElement('li', null, '1 cup Pine Nuts'),
    React.createElement('li', null, '2 cups butter lettuce'),
    React.createElement('li', null, '1 Yellow Squash'),
    React.creatEelemtn('li', null, '1/2 cup Olive Oil'),
    React.createElement('li', null, '3 Cloves of Garlic')
  ),
  React.createElement('section' {'className': 'instructions'}, //className is used to define class attributes because class is used in JS
    React.createElement('h2', null, 'Cooking Instructions'),
    React.createElement('p', null, "Preheat the oven to 350 degrees."),
    React.createElement('p', null,
        'Spread olive oil around a glass baking dish'),
    React.createElement('p', null, 'Add the salmon, garlic, and pine...'),
    React.createElement('p', null, 'Bake for 15 minutes'),
    React.createElement('p', null, 'Add the yellow squash and put...'),
    React.createElement('p', null, 'Remove from the oven and let cool')
  )
)
