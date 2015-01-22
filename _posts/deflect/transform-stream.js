var stream = require('stream');

var t = new stream.Transform();
t._transform = function(data, encoding, callback) {
  // Perform the desired, potentially asynchronous operations.
  callback();
};
