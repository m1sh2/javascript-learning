var A = (function () {
  // private variable
  var a = [1, 2, 3, 4, 5];
  
  // private method
  var B = function() {
    var sum = a.reduce(function(sum_, item) {
      return sum_ + item
    }, 0);

    return sum / a.length;
  }

  // Object interface
  return {
    a: a,
    b: B
  };
})();

console.log(A.B());