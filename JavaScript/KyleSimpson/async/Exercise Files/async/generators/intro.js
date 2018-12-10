function* gen() {
  console.log("Hello");
  yield;
  console.log("World");
}

var it = gen();
it.next();
it.next();

// automatically call next under the covers
function coroutine(g) {
  var it = g();
  return function() {
    return it.next.apply(it, arguments);
  };
}

var run = coroutine(function*() {
  var x = 1 + (yield);
  var y = 1 + (yield);
  yield x + y;
});

run();
run(10);
console.log("Meaning of lief: " + run(30).value);

function getData(file) {
  return ASQ(function(done) {
    fakeAjax(file, done);
  });
}
