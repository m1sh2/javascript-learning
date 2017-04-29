(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['Amodule'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('Amodule'));
  } else {
    // Browser globals (root is the window)
    root.returnExports = factory(root.Amodule);
  }
}(this, function (Amodule) {
  // All methods
  function a(){}; // A private method
  function b(){}; // A public method
  function c(){}; // A public method
  function d(){}; // A public method
  function e(){}; // A private method

  // Public methods
  return {
      b: b,
      c: c,
      d: d
  }
}));