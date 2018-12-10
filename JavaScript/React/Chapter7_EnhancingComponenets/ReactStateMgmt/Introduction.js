// Asynchority everywhere in JS -- but must learn the component life cycle
// before we incorporate 3rd party JS into our react components
//
// COMPONENT LIFE CYCLES 1.) mounting 2.) updating

// MOUNTING LIFECYCLE

// 1.) Allow you to initially set up state, make API calls, start and stop
//  timers, manipulate the rendered DOM, initialize third aprty libraries,
//  and more . . . allowing you to incorporate JS to assist in the initiatliztion
//  and descrution of a component
//
//  The mounting lifecycle is slightly different depending on if you use
//  React.createClass and ES6 class syntax... When using createClass
//  getDefaultProps is invoked first to obtain the component's props.
//  Next, getInitialState is invoked to initalize the state

// ES6 class props are sent as argumnets

// ES6 class	               React.createClass()

//  	                       getDefaultProps()
// constructor(props)	       getInitialState()
// componentWillMount()	     componentWillMount()
// render()	                 render()
// componentDidMount()	     componentDidMount()
// componentWillUnmount()	   componentWillUnmount()

// After the props are obtained and the state is initialized, the componentWillMount
// method is invoked. This method is invoked before the DOM is rendered and can be used
// to initialize third-aprty libraries, start animations, request data, or perform any
// additional setup that may be required before before a component is rendered
// It is possible to invoke setState from this method to change the component
// state just before the component is initially rendered

// use componentWillMount method to initalize a request from some members

//
