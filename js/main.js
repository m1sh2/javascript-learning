
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

    if (!localStorage.getItem(key)) {
      console.error('No data found');
      return false;
    }

    localStorage.setItem(key, data);
  }

  this.deleteData = function(key) {
    key = key || prompt('Key:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (!localStorage.getItem(key)) {
      console.error('No data found');
      return false;
    }

    localStorage.removeItem(key);
  }
}

function Markup() {
  this.createMarkup = function(tag, content) {
    var element = document.createElement(tag);
    element.innerHTML = content;
    document.body.appendChild(element);
  }

  this.updateMarkup = function(query, content) {
    var elements = this.findMarkup(query);
    elements[0].innerHTML = content;
  }

  this.deleteMarkup = function(query) {
    var elements = this.findMarkup(query);
    elements[0].remove();
  }

  this.findMarkup = function(query) {
    var elements = document.querySelectorAll(query);
    return elements;
  }
}

var data = new Data();
var markup = new Markup();
