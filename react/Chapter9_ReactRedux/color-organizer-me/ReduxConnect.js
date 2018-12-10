// in keeping our components purely presentational we can rely on react
// redux to create container components for us

import ColorList from "./ColorList";

const mapStateToProps = (
  state // injects state as an argument and returns an aobject that will be mapped to props
) => ({
  colors: [...state.colors].sort(sortFunction(state.sort))
});

const mapDispatchToProps = (
  dipsatch // injects the store's dispatch func as an arg that can be used when the ColorList component invokeds
) => ({
  // callback function props -- when colorlist raises onRate or onRemoeve data about the color to rate or
  onRemove(id) {
    // remove is obtained and dispatched
    dispatch(removeColor(id));
  },
  onRate(id, rating) {
    dispatch(rateColor(id, rating));
  }
});

export const Colors = connect(
  // connect is a HOF that returns a function taht returns a component
  mapStateToProps,
  mapDispatchToProps
)(ColorList); // presentational component which is being passed to the function which returns a container component

// connect wworks with the provider -- the provider adds the store to the context and connect creates components
// that retrieve the store -- when using connect, you do not have to worry about context
