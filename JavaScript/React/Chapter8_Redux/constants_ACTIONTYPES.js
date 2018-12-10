// it is smart to use constants for ACTIONS in redux / js / react
// because it allos you to import C from ./constants and then use
// the object rather than string -- C.SORT_COLORS
// OTHERWISE IF YOU HAVE TYPO IN THE STRING
// THE ERROR WILL SIMPLY NOT SHOW

const constants = {
  SORT_COLORS: "SORT_COLORS",
  ADD_COLOR: "ADD_COLOR",
  RATE_COLOR: "RATE_COLOR",
  REMOVE_COLOR: "REMOVE_COLOR"
};

export default constants;
