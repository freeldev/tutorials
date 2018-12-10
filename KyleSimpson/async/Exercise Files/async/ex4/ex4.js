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
// The old-n-busted callback way

function getFile(file) {
  return new Promise(function(resolve) {
    fakeAjax(file, resolve);
  });
}

["file1", "file2", "file3"]
  .map(getFile)
  .reduce(function combine(chain, pr) {
    return chain
      .then(function() {
        // returns a new link on the promise chain
        return pr;
      })
      .then(output);
  }, Promise.resolve()) // resolved promise is a good value to start chaining off of
  .then(function() {
    output("Complete");
  });
// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???
