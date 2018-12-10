function fromEvent(el, eventType) {
  var ch = csp.chain();
  $(el).bind(eventType, function(evt) {
    csp.putAsync(ch, evt); // call putAsync instead of put because we are in normal function
  });
  return ch;
}

csp.go(function*() {
  var ch = fromEvent(el, "mousemove");
  while (true) {
    var evt = yield csp.take(ch);
    console.log(evt.clientX + "," + evt.clientY);
  }
});
