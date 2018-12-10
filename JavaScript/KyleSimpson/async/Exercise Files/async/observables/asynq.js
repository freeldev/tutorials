// asynquence observable ( reactive sequences )

function fromEvent(el, eventType) {
  return ASQ.react(function(proceed) {
    $(el).bind(eventType, proceed);
  });
}

// alternative to fromEvent
function fromEvent(el, eventType) {
  var rsq = ASQ.react.of(); // exactly same syntax as rxjs
  $(el).bind(eventType, rsq.push); // manually pump data using push
  return rsq;
}

// aka: observable
var rsq = fromEvent(btn, "click");

rsq
  .val(function(evt) {
    return evt.target.className;
  })
  .then(function(done, className) {
    if (/foobar/.test(className)) {
      done(className);
    }
  })
  .val(function(className) {
    console.log(className);
  });
