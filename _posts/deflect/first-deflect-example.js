var fs = require('fs');

var deflect = require('deflect');

// Compose error-first, continuation passing functions.
var composed = deflect([
  // Read a file.
  function(error, fileName, next) {
    fs.readFile(fileName, next);
  },

  // Print the length of the file's content.
  function(error, content, next) {
    console.log(content.length);
    // Pass two additional (non-error, non-continuation)
    // arguments to the next function in the stack.
    next(error, content[0], content[1]);
  },

  // This function takes four arguments, including the two
  // passed from the prior function.
  function(error, first, second, next) {
    var longer = first.length > second.length ?
      first : second;
    // It also yields a final value.
    next(null, longer);
  }
]);

composed('input.txt', function(error, result) {
  if (error) {
    // ...
  } else {
    // The result will be the longer of the first two lines
    // of the file input.txt.
    console.log('Final result is: ' + result);
  }
});
