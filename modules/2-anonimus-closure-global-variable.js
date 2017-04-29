(function (A) {
  // variable to global variable
  A.a = [1, 2, 3, 4, 5];
  
  // method to global variable
  A.B = function() {
    var sum = a.reduce(function(sum_, item) {
      return sum_ + item
    }, 0);

    return sum / a.length;
  }

  console.log(B());
})(A);