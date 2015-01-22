var async = require('async');

async.series(
  [
    // Continuation passing style
    function(next) {
      next(new Error());
    },
    function(next) {
      next(null, true);
    }
  ],
  // Error-first callback
  function(error, result) {
    // ...
  }
);
