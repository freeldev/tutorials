// this will push events to an "array"
// and run all of the events until completion
// it won't drop any events
// that is not what we want

$(document).ready(function() {
  var $btn = $("#btn"),
    $list = $("#list");

  (clicks = ASQ.react.of()), (timer = ASQ.react.of());

  $btn.click(function(evt) {
    clicks.push(evt);
  });

  setInterval(function() {
    timer.push(evt);
  }, 1000);

  var msgs = ASQ.react.all(clicks, timer);

  msgs.val(function() {
    $list.append($("<div>Clicked</div>"));
  });

  // TODO: setup sampled sequence, populate $list
});

// intro
