var unlessError = function(callback) {
  return function() {
    var error = arguments[0];
    var next = arguments[arguments.length - 1];
    if (error) {
      callback.apply(this, arguments);
    } else {
      next();
    }
  };
};

deflect([
  // ...
  unlessError(function(error, input, next) {
  }),
  // ...
]);
