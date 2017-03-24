
function Data() {
  this.createData = function(key, data) {
    data = data || prompt('Data:');
    
    // data = data ? data : prompt('Data:');

    // if (typeof data === 'undefined') {
    //   data = prompt('Data:');
    // }

    localStorage.setItem(key, data);
  }

  this.readData = function(key) {
    return localStorage.getItem(key);
  }

  this.updateData = function(key, data) {
    
  }

  this.deleteData = function(key) {
    
  }
}

function Markup() {
  this.createMarkup = function(tag, content) {
    var element = document.createElement(tag);
    element.innerHTML = content;

    document.getElementsByTagName('body')[0].appendChild(element);
  }
}

var data = new Data();
var markup = new Markup();

data.createData('a');

var a = data.readData('a');

markup.createMarkup('h1', a);
