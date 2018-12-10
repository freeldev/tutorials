// this will only fire one time !!
var p1 = new Promise(function(resolve, reject) {
  $("#btn").click(function(evt) {
    var className = evt.target.className;
    if (/foobar/.test(className)) {
      resolve(className);
    } else {
      reject();
    }
  });
});

p1.then(function(className) {
  console.log(className);
});

// new promise comes with each event that is fired
// once an event has been fired whats the oint of the promise ?
// promises don't work well in a event oriented world
// causes a separation of concerns issue the button listener and subscriber
// are set up in the same location
$("#btn").click(function(evt) {
  var className = evt.target.className;
  var p1 = new Promise(function(resolve, reject) {
    if (/foobar/.text(className)) {
      resolve(className);
    } else {
      reject();
    }
  });
  p1.then(function(className) {
    console.log(className);
  });
});

// synchronous style code that doesn't care about promises
// but still has a separation of concerns issue
$("#btn").click(function(evt) {
  [evt]
    .map(function mapper(evt) {
      return evt.target.className;
    })
    .filter(function filterer(className) {
      return /foobar/.test(className);
    })
    .forEach(function(className) {
      console.log(className);
    });
});
