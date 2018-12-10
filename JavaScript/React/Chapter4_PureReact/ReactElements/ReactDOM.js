// reactDOM contains the tools necessary to render React elements in the browser
// it contains render, renderToString, and renderToStaticMarkup
// all tools necessary to generate HTML from the virtual DOM are found here :)

//render a react elemtn using ReactDOM.render

var dish = React.createElement('h1', null, 'Baked Salmon')

// 1st argument - element to render
// 2nd argument - the target node where we should render the element
ReactDOM.render(dish, document.getElementById('react-container'))

// the result would be the h1 tag within the div tag below

<body>
  <div id='react-container'>
    <h1>Baked Salmon</h1>
  </div>
</body>
