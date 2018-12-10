// redux comes with a compose function that you can use to compose
// several functions into a single function

// if we wanted to get a comma-deliited list of color titles we could use this . . .

console.log(
  store
    .getState()
    .colors.map(c => c.title)
    .join(", ")
);

// A BETTER AND MORE FUNCTIONAL APPROACH ISTO BREAK THIS DOWN INTO SMALLER FUNCTIONS
// AND COMPOSE THEM TO A SINGLE FUNCTGION

import { compose } from "redux";

const print = compose(
  list => console.log(list),
  titles => titles.join(", "),
  map => map((c = c.title)),
  colors => colors.map.bind(colors),
  state => state.colors
);
print(store.getState());
