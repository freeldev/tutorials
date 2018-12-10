var rsq1 = fromEvent(btn, "click"),
  rsq2 = fromEvent(inp, "keypress"),
  rsq3 = ASQ.react.all(rsq1, rsq2), // fire event when all are received
  rsq4 = ASQ.react.any(rsq1, rsq2); // fire event when event is received asap

rsq3.val(function(evt1, evt2) {
  //..
});

rsq4.val(function(evt) {
  //..
});
