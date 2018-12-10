// communicating sequential processes

var ch = chan();

function* process1() {
  yield put(ch, "hello"); // process1 pauses until put unblocks and provides data
  var msg = yield take(ch);
  console.log(msg);
}

function* process2() {
  var greeting = yield take(ch); // needs a message from the ch channel
  yield put(ch, greeting + " World");
  console.log("done!");
}

// Hello World
