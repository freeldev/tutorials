// React allows for you to build your own specific validations
// in case you need to check that a certain number is provided --
// or that a value contains a certain string

// custom validators allow us to test the property in many different ways ...
// when using isRequired -- it only allows for very simple type checking

propTypes: {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ? // errors can only be returned when certain critera are NOT met
      new Error('A title must be a string') :
        (props[propName].length > 20) ?
          new Error('title is over 20 characters') :
          null
}
