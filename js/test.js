
var a = {
  A: function() {
    console.info(this);
  }
};

function A() {
  console.info(this);
}

A();
a.A();

var b = new A();
console.info(b);

