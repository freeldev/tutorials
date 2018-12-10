function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  var randomDelay = Math.round(Math.random() * 1e4) % 8000 + 1000;

  console.log("Requesting: " + url);

  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************

function getFile(file) {
  var resp, fn;

  // PART 1
  fakeAjax(file, function(response) {
    if (fn)
      fn(response); // if PART 2 runs before PART 1 and sets fn then run the function
    else text = response; // if PART 1 (AJAX) runs / completes before PART 2 store the response
  });

  // PART 2
  return function th(cb) {
    if (text)
      cb(text); // IF PART 1 runs before PART 2 run the provided callback on the ajax response
    else fn = cb; // if PART 2 completes before PART 1 store the provided cb in fn
  };
}

// request all files at once in "parallel"
var th1 = getFile("file1");
var th2 = getFile("file2");
var th3 = getFile("file3");

th1(function ready(text) {
  output(text);
  th2(function ready(text) {
    output(text);
    th3(function ready(text) {
      output(text);
      output("Complete!");
    });
  });
});

//** case where th1 finishes first */
// it will return the returned function because its faster than the ajax call because its called on line 43

// ** case where th3 ajax finishes first
// if th3 ajax finishes first -- it wont' run the return function because it isn't called until to completion of th1 and th2
// the returned function is only called in the compiled statement lines 43 - 52
