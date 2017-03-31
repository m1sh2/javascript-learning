
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

class Markup {
  constructor() {

  }

  createMarkup() {

  }

  updateMarkup() {

  }

  ...
}

function Markup() {
  
}

Markup.prototype.createMarkup = function(
  tag,
  content,
  parent,
  styleClass,
  id,
  callback
) {
  var element = document.createElement(tag);
  element.innerHTML = content;

  if (styleClass) {
    element.className += styleClass;
  }

  if (id) {
    element.id = id;
  }

  if (parent) {
    var prnt = document.querySelector(parent);
    if (!prnt) {
      console.error('No element found');
      return false;
    }
    prnt.appendChild(element);
  } else {
    document.body.appendChild(element);
  }
};

Markup.prototype.updateMarkup = function(query, content) {
  var elements = this.findMarkup(query);
  elements[0].innerHTML = content;
};

Markup.prototype.deleteMarkup = function(query) {
  var elements = this.findMarkup(query);
  elements[0].remove();
};

Markup.prototype.findMarkup = function(query) {
  var elements = document.querySelectorAll(query);
  return elements;
};

var data = new Data();
var markup = new Markup();

markup.createMarkup('header', 'Logo', '#app', function() {

});
markup.createMarkup('aside', '<ul>\
<li><a href="#">Link1</a></li>\
<li><a href="#">Link2</a></li>\
</ul>', '#app');
markup.createMarkup(
  'article',
  '',
  '#app',
  'content',
  'cnt'
);
markup.createMarkup(
  'h1',
  'Hello World!',
  '#cnt'
);
markup.createMarkup(
  'footer',
  'Copyright 2017',
  '#app',
  'footer'
);

// native
// jquery
// backbone
// angular
