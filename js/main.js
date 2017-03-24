
function Data() {
  this.createData = function(key, data) {
    key = key || prompt('Key:');
    data = data || prompt('Data:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (typeof data === 'undefined') {
      console.error('No data');
      return false;
    }

    localStorage.setItem(key, data);
  }

  this.readData = function(key) {
    if (typeof key === 'undefined') {
      console.error('No data');
      return false;
    }

    var data = localStorage.getItem(key);

    if (!data) {
      console.error('No data');
      return false;
    }

    return data;
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

    document.body.appendChild(element);
  }
}

var data = new Data();
var markup = new Markup();