// The benefit of React is we can separate the UI from the data
// We can use JS logic to build a Component Tree for us from an array
// of data

// for example... the unordered list

React.createElement('ul' {'className': 'ingredients'},
  React.createElement('li', null, '1 lib of Salmon'),
  React.createElement('li', null, '1 cup of Pine Nuts'),
  React.createElement('li', null, '2 cups of butter lettuce'),
  React.createElement('li', null '1 Yellow Squash'),
  React.createElement('li', null, '1/2 cup Olive Oil'),
  React.createElement('li' null, '3 Cloves of Garlic')
)

// to shorten this code we could use JS logic

var items = [
  '1 lb Salmon',
  '1 cup of Pine Nuts',
  '2 cups of Butter Lettuce',
  '1/2 cup of Olive Oil'
  '1 Yellow Squash',
  '3 Cloves of garlic'
]

// Map this array to a createElement function -- won't work because React likes
// tohave each element hold a key property when building a function like this

React.createElement(
  'ul',
  {'className': 'ingredients'},
  items.map(ingredient =>
    React.createElement('li', null, ingredient)
)

// WE CAN AVOID USING A KEY PROPERT -- NOT NECESSARILY THE BEST WAY TO DO IT!!
// BUT AVOIDS THE ERROR THE CODE ABOVE WILL THROW

React.createElement('ul', {'className': 'ingredients'},
  items.map((ingredient, i)=>
    React.createElement('li', {key: i}, ingredient)
  )
)
