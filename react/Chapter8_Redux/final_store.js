import storeFactory from "./Middleware";

const store = storeFactory(true);

store.dispatch(addColor("#FFFFFF", "Bright White"));
store.dispatch(addColor("#00FF00", "Lawn"));
store.dispatch(addColor("#0000FF", "Big Blue"));
