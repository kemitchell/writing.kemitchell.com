var fs = require('fs');

fs.readFile(
  '/etc/passwd',
  // This is the "callback function."
  // Notice that the first argument is an error.
  function(error, data) {
    // If readFile produces any kind of error, it
    // will be passed as the error argument.
    if (error) {
      throw error;
    }
    // In the normal, desireable case, error
    // will be falsy (probably null or undefined).
    console.log(data);
  }
);
