// A common solution for collecting data from a React component is inverse
// data flow.  Pass a callback function as a prop that the component
// can use to pass data back as arguments

// called inverse data flow because we pass a callback function as a props
// and the callback sends arguments as function arguments


// function logColor recies the title and color as arguments... those values
// of those arguments can be logged to the console.  When we use the AddColorForm
// we simply add a function property for onNewColor and set it to our logColor
// function

import AddColorForm from './components/AddColorForm_es6_class'

/*
const logColor = (title, color) =>
  console.log(`New Color: ${title} | ${value}`)

<AddColorForm onNewColor={logColor} />
*/

// WE CAN DEFINE CALLBACK FOR IDF DIRECTLY IN THE Component

<AddColorForm onNewColor={(title, color) => {
  console.log(`TODO: add new ${title} and ${color} to the list`)
  console.log(`TODO: render UI with new color`)
}} />

// WHEN WE ARE READY WE CAN COLLECT THE INFORMATION FROM THIS Component
// AND ADD THE NEW COLOR
