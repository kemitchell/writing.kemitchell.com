var http = require('http');
var async = require('async');

// Factory for text/plain resource handler functions.
var textResource = function(path, text) {
  return function(env, next) {
    if (env.request.url === '/' + path) {
      env.response.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      env.response.write(text);
    }
    next(null, env);
  };
};

var app = async.seq(
  // Middleware to trim trailing request path slashes.
  function(env, next) {
    var url = env.request.url;
    if (url[url.length - 1] === '/') {
      env.request.url = url.slice(0, url.length - 1);
    }
    next(null, env);
  },

  // Handler for the /a resource
  textResource('a', 'A!'),

  // Handler for the /b resource
  textResource('b', 'B!'),

  // Handler for /c, rigged to error out
  function(env, next) {
    if (env.request.url === '/c') {
      next(new Error());
    } else {
      next(null, env);
    }
  }
);

var handler = function(request, response) {
  // Package request and response in a single
  // object for passing on down via .seq
  var env = {
    request: request,
    response: response
  };

  // Invoke the function created by async.seq
  app(env, function(error) {
    // If there's an error, send an error
    // status code.
    if (error) {
      response.statusCode = 500;
    }
    response.end();
  });
};

var server = http.createServer(handler);
