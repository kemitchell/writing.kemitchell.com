defect([
  function ( error,                 next ) {
      // ...
      next ( error,  true );               }, // 1 value

  function ( error,  x,             next ) {  // (same)
      // ...
      next ( error,  x,     true );        }, // 2 values

  function ( error,  x,     y,      next ) {  // (same)
      // ...
      next ( error,  x    );               }, // 1 value

  function ( error,                 next ) {  // (same)
      // ...
      next ( error );                      }
]);
