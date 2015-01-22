var connect = require('connect');

// By default, the stack of functions contains only a
// default final handler that throws an error.
var app = connect();

// Push a handler function onto the stack.
app.use(function(request, response, next) {
  // Write to response, or defer to remaining handler
  // functions on the stack by calling next.
});

// Push error handling middleware onto the stack.
app.use(function(error, request, response, next) {
  // Handle the error, or defer to the next error handling
  // middleware.
});
