// This is known as a gate
Promise.all([doTask1a(), doTask1b(), doTask1c()]).then(function(results) {
  return doTask2(Math.max(results[0], results[1], results[2]));
});

var p = trySomeAsyncThing();

Promise.race([
  p,
  new promise(function(_, reject) {
    // basically a rejection promise which will call the timeout
    setTimeout(function() {
      reject("Timeout!!");
    }, 3000);
  })
]).then(success, error);
