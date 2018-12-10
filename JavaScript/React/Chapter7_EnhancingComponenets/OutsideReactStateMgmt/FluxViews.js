// flux will manage application state, so unless we need a
// lifecycle function we will not need class components

const Countdown = ({ count, tick, reset }) => {
  if (count) {
    setTimeout(() => tick(), 1000);
  }

  return count ? (
    <h1>{count}</h1>
  ) : (
    <div onClick={() => reset(10)}>
      {" "}
      {/* on click it will display the count unless count is 0 then displays CELEBRATE!! 
                                      when the count is not zero it waits for one second then invokes the action TICK
                                      when count is  0 it will not invoke any other action creators until the user clicks
                                     until the user clicks the main div and triggers a reset resetting the count to 10 */}
      <span>CELEBRATE!!!</span>
      <span>(click to start over)</span>
    </div>
  );
};

export default Countdown;
