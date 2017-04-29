define('Amodule', function () {
    // Module value is a returning value.
    return {
      a: function() {
        return 'hello world!'
      }
    };
});

// ---------------------------------
// In another file

define(['Amodule'], function(Amodule) {
  console.log(Amodule.a());
});