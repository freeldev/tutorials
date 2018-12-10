// React.Children allows us to work with children of a particular component -- we can
// count, map, loopover, or convert props.children to an array
// also to verify you are displaying a single child with React.Children only

import { Children, PropTypes } from "react";
import { render } from "react-dom";

const Display = ({ ifTruthy = true, children }) =>
  ifTruthy
    ? Children.only(
        children
      ) /* this is the check for only one child .... will throw error if more than one child */
    : null;

const age = 22;

render(
  <Display ifTruthy={age >= 21}>
    {" "}
    {/* if display contained more than one component it would throw an error */}
    <h1>You can enter</h1>
  </Display>,
  document.getElementById("react-container")
);

// we can also  use React.Children to conver the children to an array

const { Children, PropTypes } = React;
const { render } = ReactDOM;

const findChild = (children, child) =>
  Children.toArray(children).filter(c => c.type === child)[0];

const WhenTruthy = ({ children }) => Children.only(children);

const WhenFalsy = ({ children }) => Children.only(children);

const Display = ({ ifTruthy = true, children }) =>
  ifTruthy ? findChild(children, WhenTruthy) : findChild(children, WhenFalsy);

const age = 19;

render(
  <Display ifTruthy={age >= 21}>
    <WhenTruthy>
      <h1>You can Enter </h1>
    </WhenTruthy>
    <WhenFalsy>
      <h1>Beat it Kid</h1>
    </WhenFalsy>
  </Display>,
  document.getElementById("react-container")
);
