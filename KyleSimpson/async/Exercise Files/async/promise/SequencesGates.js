// promise sequences

ASQ()
  .then(function(done) {
    setTimeout(done, 1000);
  })
  .gate(
    function(done) {
      setTimeout(done, 1000);
    },
    function(done) {
      setTimeout(done, 1000);
    }
  )
  .then(function(done) {
    console.log("2 seconds passed!");
  });

function getData(d) {
  return ASQ(function(done) {
    setTimeout(function() {
      done(d);
    }, 1000);
  });
}

ASQ()
  .waterfall(
    function(done) {
      getData(10).pipe(done);
    },
    function(done) {
      getData(10).pipe(done);
    }
  )
  .seq(function(num1, num2) {
    var x = 1 + num1;
    var y = 1 + num2;
    return getData("Meaning of life: " + (x + y));
  })
  .val(function(answer) {
    console.log(answer);
  });
