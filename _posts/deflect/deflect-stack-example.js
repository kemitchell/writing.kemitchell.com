var deflect = require('deflect');

var requireAuth = function(error, request, response, next) {
  // Parse the Authorization header, pull the user record
  // from the database, check it against the header, and
  // pass it along as an argument to the next function.
  next(error, user, request, response);
};

var postXHandler = function(error, user, req, res, next) {
  // Subsequent functions will not need the user object,
  // so there is no need to yield it.
  if (!user) {
    // ...
    next(error, req, res);
  } else {
    // ...
    next(error, req, res);
  }
};

deflect([
  function(error, request, response, next) {
    if (request.url === '/x' && request.method === 'POST') {
      // With just a function argument, the callback will
      // call the provided function with the arguments
      // passed to this function.
      next([
        requireAuth,
        postXHandler
      ]);
    } else {
      // Without arguments, the callback will reuse the
      // arguments passed to this function with the next
      // from the stack of composed functions.
      next();
    }
  }
]);
