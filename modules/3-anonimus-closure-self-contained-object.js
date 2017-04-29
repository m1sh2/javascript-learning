var A = (function () {
  // Object interface
  return {
    a: [1, 2, 3, 4, 5],
    b: function() {
      var sum = this.a.reduce(function(sum_, item) {
        return sum_ + item
      }, 0);

      return sum / a.length;
    }
  };
})();

console.log(A.B());