function Markup() {
  
}

Markup.prototype.createMarkup = function(options) {
  // tag
  // content
  // parent
  // styleClass
  // id
  // callback

  optionsDefault = {
    tag: 'div',
    content: '',
    parent: 'body',
    styleClass: '',
    id: '',
    callback: undefined,
    attrs: []
  };

  options = options || {};

  for(var i in optionsDefault) {
    if (options.hasOwnProperty(i)) {
      optionsDefault[i] = options[i];
    }
  }

  if (optionsDefault.tag === 'input') {
    $element.attr('type', 'text');
  } else if (optionsDefault.tag === 'input#checkbox') {
    $element.attr('type', 'checkbox');
    $element.val();
    $element.attr('checked', 'checked');
    $element.prop('checked', true);
  }
  
  $element.html(optionsDefault.content);
  $element.text(optionsDefault.content);
  prnt.append($element);

  $element.on('click', function(event) {
    
  });

  if (optionsDefault.tag === 'input#checkbox') {
    element = document.createElement('input');
    element.type = 'checkbox';
    element.value = 1;
  } else {
    element = document.createElement(optionsDefault.tag);
  }

  element.innerHTML = optionsDefault.content;

  if (optionsDefault.styleClass) {
    element.className += optionsDefault.styleClass;
  }

  if (optionsDefault.id) {
    element.id = optionsDefault.id;
  }

  if (optionsDefault.tag === 'form') {
    element.action = 'javascript:void(0)';
    element.method = 'post';
  }

  if (optionsDefault.parent) {
    var prnt = document.querySelector(optionsDefault.parent);
    if (!prnt) {
      console.error('No element found');
      return false;
    }
    prnt.appendChild(element);
  } else {
    document.body.appendChild(element);
  }
  return element;
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

var markup = new Markup();
