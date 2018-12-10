// subscribable example

var rsq1 = ASQ.react.of();
var rsq2 = ASQ.react.of(1, 2, 3);
var x = 10;

setInterval(function() {
  rsq1.push(x++);
  rsq2.push(x++);
}, 500);

rsq1.val(function(v) {
  // sucribe to rsq1 and print out data
  console.log("1:", v);
});
// 1: 10 1: 12 1: 14 ....

rsq2.val(function(v) {
  console.log("2:", v);
});
// 2: 1 2: 2 2: 3 2: 11 2: 13
