ASQ().runner(
  ASQ.csp.go(function* process1(ch) {
    // automatic channel created to send communication on -- can create channels if you need separate.
    yield ASQ.csp.put(ch, "Hello");
    var msg = yield ASQ.csp.take(ch);
    console.log(msg);
  }),
  ASQ.csp.go(function* process2(ch) {
    var greeting = yield ASQ.csp.take(ch);
    yield ASQ.csp.put(ch, greeting + " World");
    console.log("done! ");
  })
);
