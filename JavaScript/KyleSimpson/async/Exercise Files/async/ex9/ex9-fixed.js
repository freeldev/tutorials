$(document).ready(function() {
  var $btn = $("#btn"),
    $list = $("#list"),
    clicks = ASQ.csp.chan(), // creating communication channels
    msgs = ASQ.csp.chan(), // creating communication channels
    queuedClick;

  $btn.click(listenToClicks);

  // run go-routines
  ASQ().runner(
    ASQ.csp.go(sampleClicks), // go routine to listen to click events
    ASQ.csp.go(logClick) // go routine to log the messages
  );

  // push click event messages into channel
  function listenToClicks(evt) {
    // can't use generator because it is being called by a click handler
    if (!queuedClick) {
      // below code simulates backpressure by knowing tha the promise hasn't been received yet
      queuedClick = ASQ.csp.putAsync(clicks, evt); // returns a promise that lets us know when put has been accepted by channel
      queuedClick.then(function() {
        // listen to completion and when complete clear it out as below
        queuedClick = null;
      });
    }
  }

  // sample clicks channel
  function* sampleClicks() {
    while (true) {
      yield ASQ.csp.take(ASQ.csp.timeout(1000));
      yield ASQ.csp.take(clicks);
      yield ASQ.csp.put(msgs, "clicked!");
    }
  }

  // subscribe to sampled message channel
  function* logClick() {
    while (true) {
      var msg = yield ASQ.csp.take(msgs);
      $list.append($("<div>" + msg + "</div>"));
    }
  }
});
