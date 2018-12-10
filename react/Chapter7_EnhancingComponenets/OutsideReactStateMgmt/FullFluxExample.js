import Countdown from "./FluxViews";
import CountdownDispatcher from "./Dispatcher";
import countdownActions from "./ActionsPlusActionCreators";
import CountdownStore from "./Stores";

const appDispatcher = new CountdownDispatcher();
const actions = countdownActions(appDispatcher);
const store = new CountdownStore(10, appDispatcher);

const render = count =>
  ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById("react-container")
  );

store.on("TICK", () => render(store.count));
store.on("RESET", () => render(store.count));
