
function ListTodos() {
  var todos = data.readData('todos');
  if (!todos) {
    todos = [];
    data.updateData('todos', JSON.stringify(todos));
  }

  var self = this;

  events.subscribe('get-todos-list', function() {
    self.getList();
  });
}

ListTodos.prototype.getList = function() {
  var todos = data.readData('todos');
  todos = JSON.parse(todos);

  $todos = $('#todo_items');
  $todos.html('');

  if (!todos.length) {
    return false
  }

  todos.forEach(function(todo, index) {
    var $todo = $('<div/>');
    var $todoCheckbox = $('<input type="checkbox"/>');
    var $todoText = $('<span/>');
    var $todoDelete = $('<button type="button"/>');

    $todoText.html(todo);
    $todoDelete.html('X');

    $todo.on('mouseup', function(event) {
      event.preventDefault();

      if (event.target.nodeName === 'BUTTON') {
        todos.splice(index, 1);
        data.updateData('todos', JSON.stringify(todos));
        events.send('get-todos-list');
      } else {
        var isChecked = $todoCheckbox.is(':checked');
        isChecked = !isChecked;

        if (event.target.nodeName !== 'INPUT') {
          $todoCheckbox.prop('checked', isChecked);
        }

        if (isChecked) {
          $todo.addClass('checked');
        } else {
          $todo.removeClass('checked');
        }
      }
    });

    $todo.append($todoCheckbox);
    $todo.append($todoText);
    $todo.append($todoDelete);

    $todos.append($todo);
  });
};

var listTodos = new ListTodos();
