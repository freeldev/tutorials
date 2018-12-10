// RXJS is the javascript for  observables

var obsv = Rx.Observable.fromEvent(btn, "click");

obsv
  .map(function mapper(evt) {
    // map in asynchronhous works everytime a new piece of data comes along
    return evt.target.className;
  })
  .filter(function filterer(className) {
    return /foobar/.test(className);
  })
  .distinctUntilChanged() // the first time a piece of data comes through -- but if the same piece comes through don't let it go through
  .subscribe(function(data) {
    // end of the chain -- add a synchronous response to events coming in ?
    var className = data[1];
    console.log(className);
  });
