// updating lifecycel is a series of methods that are invoked
// when a component's state changes or when
// new properties are received from the parent

// calling setState within the update lifecycle will cause an infinite
// recursive loop that results in a stack overflow error
// setState can only be called in componentWillReceiveProps
// which allows the component to update state when its props are
// updated

// THE UPDATING LIFECYCLE INCLUES THE FOLLOWING METHODS
// componentWillReceiveProps(nextProps)
//      only invoked if new props have been passed to the
//      component.  This is the only method where setState
//      can be called

// shouldComponentUpdate(nextProps, nextState)
//      can call of the update -- can be used to improve
//      performancee by calling off unecessary updates

// componentWillUpdate
//      invoked just before component updates

// componentDidUpdate
//      invoked just after the update takes place, after the call
//      to render.
