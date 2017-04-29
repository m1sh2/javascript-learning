// filename - module.js
function Amodule() {
  this.a = function() {
    return 'hello!';
  }

  this.b = function() {
    return 'world!';
  }
}

module.exports = Amodule;

// ---------------------------------
// In another file

var Amodule = require('./module');

var AmoduleInstance = new Amodule();
AmoduleInstance.a(); // 'hello!'
AmoduleInstance.b(); // 'world!'