// JSX was released by Facebook in hopes to make React more readable
// like html and xml -- we can create complex DOM trees very easily
// using JSX syntax which is very similar in style to HTML

// example JSX
<ul>
  <li>1 lb Salmon</li>
  <li>1 cup Pine Nuts</li>
  <li>2 cups Butter Lettuce</li>
  <li>1 Yellow Squash</li>
  <li>1/2 cup Olive Oil</li>
  <li>3 cloves of Garlic</li>
</ul>

// WE CAN USE JSX WITH React.createElement as well!!

// when passsing an array to component need to surround it with curly braces
// known as js expressions - componenets will either take string or
// js expressions such as arrays, objects, and functions
React.createElement(IngredientsList, {list:[...]});

// the above code is the same as

<IngredientsList list = {[...]}/>
