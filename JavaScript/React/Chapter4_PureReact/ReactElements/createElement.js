// react elements are instructions for how the browser DOM should
// create elements -- during rendering, React will convert this element
// to an actual DOM element

<h1>Baked Salmon</h1>

// REACT EQUIVALENT OF ABOVE
// 1st argument - the tag type
// 2nd argument - elements properties
// 3rd argument - child
React.createElement('h1', null, 'Baked Salmon')

//when an element has attribures they be described with properties
//below is an example of an HTML h1 tag that has id and data-type
//attributes

//data-reactroot identifies that this is the root of react component
<h1 data-reactroot id='recipe-0' data-type='title'>Baked Salmon</h1>

// REACT EQUIVALENT OF ABOVE
React.createElement('h1'
  {id: 'recipe-0', 'data-type':'title'},
  "Baked Salmon"
)

//React element is just a JS literal that tells React how to construct
//the DOM below shows the element that createElement creates, never
//handwrite such an eleemnt use createElement

// fields used by react: _owner, _store, $$typeof
{
  $$typeof: Symbol(React.element),
  "type": "h1",  //tells whet type of html or svg to create
  "key": null,
  "ref" null,
  "props": {'children', 'Baked Salmon'} // represents the data and child elements required to construct a DOM element
                                        // children property is for displaying other nested elements as text
  "_owner": null",      //
  "_store": {}
}
